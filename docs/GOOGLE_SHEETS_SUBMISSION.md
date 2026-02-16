# Google Sheets Script Submission — In-Depth Technical Guide

This document explains how quiz lead data is captured in the frontend, sent through the Next.js API, and written to Google Sheets via a Google Apps Script web app.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [End-to-End Data Flow](#2-end-to-end-data-flow)
3. [Why We Use a Proxy (Next.js API)](#3-why-we-use-a-proxy-nextjs-api)
4. [Frontend: QuizSection](#4-frontend-quizsection)
5. [Backend: `/api/submit-lead`](#5-backend-apisubmit-lead)
6. [Google Apps Script Web App](#6-google-apps-script-web-app)
7. [Environment Variables](#7-environment-variables)
8. [Column Mapping](#8-column-mapping)
9. [Security and Reliability](#9-security-and-reliability)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Architecture Overview

```
┌─────────────────┐     POST /api/submit-lead      ┌──────────────────────┐     POST (server-side)      ┌─────────────────────┐
│  QuizSection    │  ──────────────────────────►  │  Next.js API Route   │  ────────────────────────►  │  Google Apps Script │
│  (Browser)      │     JSON body                  │  submit-lead/route   │     same JSON body          │  Web App (doPost)    │
└─────────────────┘                              └──────────────────────┘                             └──────────┬──────────┘
                                                                                                                      │
                                                                                                                      │ appendRow()
                                                                                                                      ▼
                                                                                                            ┌─────────────────────┐
                                                                                                            │  Google Sheet       │
                                                                                                            │  (your spreadsheet) │
                                                                                                            └─────────────────────┘
```

- **Browser** never talks to Google directly. It only talks to your own origin (`/api/submit-lead`), so there is no cross-origin (CORS) issue with Google.
- **Next.js API route** runs on the server. It reads the request body and forwards it to the Google Apps Script Web App URL. The server is not subject to the browser’s CORS rules when calling Google.
- **Google Apps Script** is deployed as a “Web app” and exposes an endpoint that accepts POST requests. The `doPost(e)` function receives the body, parses the JSON, and appends one row to the linked spreadsheet.

---

## 2. End-to-End Data Flow

1. User completes the quiz (protocol, peptide experience, willingness, investment, then name/email/phone) and submits.
2. **QuizSection** `handleFormSubmit` builds a payload and calls `fetch('/api/submit-lead', { method: 'POST', body: JSON.stringify(payload) })`.
3. **Next.js** runs `app/api/submit-lead/route.ts` `POST` handler. It reads `process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`, then `fetch(thatUrl, { method: 'POST', body: same JSON })`.
4. **Google** runs the Apps Script’s `doPost(e)`. The script parses `e.postData.contents` as JSON, maps fields to the sheet columns, and calls `sheet.appendRow([...])`.
5. The script returns a JSON response; the API route forwards the status/body back to the browser. The UI does not block on success/failure: the redirect to the lead-magnet page happens regardless (by design).

---

## 3. Why We Use a Proxy (Next.js API)

- **CORS**: Google’s Apps Script Web App URL is on `script.google.com`. Browsers block cross-origin `fetch()` from your site to Google unless Google sends specific CORS headers. Apps Script does not send headers that allow arbitrary sites to read the response. So the browser would see a failed or opaque response.
- **Fix**: The browser only calls your own API (`/api/submit-lead`). The **server** (Next.js) then calls Google. Server-to-server requests are not subject to CORS, so the request succeeds and your API can return a proper response to the client.
- **Side effect**: The Apps Script URL is only used on the server, so it could be in a server-only env var (e.g. `GOOGLE_APPS_SCRIPT_URL`) for better security. The current setup uses `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` so the same code could call it from the client for other use cases; for this flow only the API route uses it.

---

## 4. Frontend: QuizSection

**File:** `components/QuizSection.tsx`

- On submit, the handler builds a payload with:
  - `name` ← `formData.fullName`
  - `email` ← `formData.email`
  - `phone` ← `formData.phone`
  - `painPoint` ← derived from `selectedProtocol` (e.g. "Muscle Growth" → "Slow or stalled muscle growth")
  - `experience` ← `peptideExperience`
  - `peptideWillingness` ← `peptideWillingness`
  - `investment` ← `healthInvestment`
- It then:
  - Calls `fetch('/api/submit-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })`.
  - In a `finally` block (or after the try/catch), it always calls `onComplete(...)` so the user is redirected to the lead-magnet page even if the submit-lead request fails. So “submit to sheet” is best-effort and does not block the funnel.

---

## 5. Backend: `/api/submit-lead`

**File:** `app/api/submit-lead/route.ts`

- **Method:** POST only.
- **Behavior:**
  1. Read the incoming body: `await request.json()`.
  2. Read `process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`. If missing, respond with 500 and a message that the URL is not configured.
  3. Forward the **same body** to the Apps Script URL with `fetch(googleAppsScriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })`.
  4. If the response is ok, return the Apps Script response body and 200; otherwise return the status and error details (and log the error text for debugging).

The route does not validate or transform the body; it is a transparent proxy. Validation could be added here (e.g. required fields, format) if you want to reject bad requests before hitting Google.

---

## 6. Google Apps Script Web App

**Location:** The script is not in the repo; it lives in the Google Sheet (Extensions → Apps Script).

- **Deployment:** Deploy as “Web app”, execute as “Me”, “Anyone” can access (so your server can call it without Google login).
- **Entry point:** `doPost(e)`.
  - `e.postData.contents` is the raw POST body (string). The script parses it as JSON.
  - From that object it reads: `name`, `email`, `phone`, `painPoint`, `experience`, `peptideWillingness`, `investment` (with fallbacks to `''`).
  - It gets the active sheet: `SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()`.
  - It appends one row: `sheet.appendRow([name, email, phone, painPoint, experience, peptideWillingness, investment])`.
  - It returns a JSON text output with `{ success: true }` or an error object, and `ContentService.createTextOutput(...).setMimeType(ContentService.MimeType.JSON)`.

**Important:** The sheet that receives data is the one that was open in the editor when the script is “run” in the sense of the Web app deployment. So the script is tied to that spreadsheet (and its active sheet at deploy time). If you use “active spreadsheet” at request time, it’s the spreadsheet that owns the Web app project.

---

## 7. Environment Variables

- **Name:** `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
- **Value:** Full Web app URL, e.g. `https://script.google.com/macros/s/AKfycby.../exec`
- **Where:** `.env.local` (or your production env). Restart the dev server after changing.
- **Used by:** Only the API route (`app/api/submit-lead/route.ts`). The `NEXT_PUBLIC_` prefix is not strictly necessary for server-only use; you could use `GOOGLE_APPS_SCRIPT_URL` and keep the URL out of the client bundle.

---

## 8. Column Mapping

| Sheet column (Row 1) | Payload key           | Source in QuizSection                          |
|----------------------|-----------------------|-----------------------------------------------|
| name                 | `name`                | `formData.fullName`                           |
| email                | `email`               | `formData.email`                              |
| phone number         | `phone`               | `formData.phone`                               |
| pain point           | `painPoint`           | Derived from `selectedProtocol` (see below)   |
| experience           | `experience`          | `peptideExperience`                           |
| peptide willingness  | `peptideWillingness`  | `peptideWillingness`                          |
| investment           | `investment`          | `healthInvestment`                            |

**Pain point derivation (in QuizSection):**

- "Muscle Growth" → "Slow or stalled muscle growth"
- "Fat Loss" → "Stubborn fat that won't budge"
- "Brain Function" → "Mental fog and lack of focus"

---

## 9. Security and Reliability

- **No credentials in the repo:** Only the Web app URL is in env; no service account JSON in code.
- **Public Web app URL:** Anyone with the URL could POST. You can add a shared secret header and check it in Apps Script if you want to lock it down.
- **Input:** The API and/or Apps Script can validate required fields and types before writing.
- **Failure handling:** The frontend does not block the user on submit-lead failure; the funnel continues. You can add retry or a small “Couldn’t save your response; we’ll follow up by email” if you want to surface a soft failure.

---

## 10. Troubleshooting

| Symptom | What to check |
|--------|----------------|
| 500 “Google Apps Script URL not configured” | `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` in `.env.local`, server restarted. |
| 500 from API with “Failed to submit to Google Sheets” | Apps Script `doPost` error; check Executions in Apps Script; confirm Web app is deployed and “Anyone” access. |
| No new row in sheet | Same script and sheet? Correct sheet tab (active sheet at request time). Check script’s `getActiveSpreadsheet()` / `getActiveSheet()`. |
| CORS error in browser | You must not call the Apps Script URL from the browser; only the Next.js API should call it. Ensure the quiz uses `/api/submit-lead`. |
| Wrong sheet or tab | In Apps Script, the “active” spreadsheet/sheet is the one associated with the script project. Create the script from the correct sheet and deploy from that project. |

---

## Quick Reference

- **Frontend:** `QuizSection.tsx` → `fetch('/api/submit-lead', { method: 'POST', body: JSON.stringify({ name, email, phone, painPoint, experience, peptideWillingness, investment }) })`.
- **Backend:** `app/api/submit-lead/route.ts` → `fetch(process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL, { method: 'POST', body: same JSON })`.
- **Google:** Apps Script `doPost(e)` → `JSON.parse(e.postData.contents)` → `sheet.appendRow([...])`.
- **Sheet:** Row 1 = headers (name, email, phone number, pain point, experience, peptide willingness, investment); new rows appended below.

This is the full chain that makes the “Google Sheet script submission” connection work in this project.
