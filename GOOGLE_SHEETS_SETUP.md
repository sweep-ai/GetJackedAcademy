# Google Sheets Integration Setup (No Google Console Required!)

This guide will help you set up the Google Sheets integration using Google Apps Script. **No Google Cloud Console setup needed!**

## Quick Setup (5 minutes)

### Step 1: Open Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1mQ1UVIvAik8gGNtBMGETp4pfUm40zRboC3im5dW-zso
2. Make sure the first row has these column headers:
   - name
   - email
   - phone number
   - pain point
   - experience
   - peptide willingness
   - investment

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Fallback for form data
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the row to the sheet
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.phone || '',
      data.painPoint || '',
      data.experience || '',
      data.peptideWillingness || '',
      data.investment || ''
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log error for debugging
    Logger.log('Error in doPost: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests for testing
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'Google Apps Script is running. Use POST to submit data.',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾 icon) or press `Cmd+S` / `Ctrl+S`
5. Give your project a name (e.g., "Lead Capture")

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Lead Capture API" (optional)
   - **Execute as**: "Me" (your account)
   - **Who has access**: "Anyone" (this allows your website to call it)
4. Click **Deploy**
5. **IMPORTANT**: You'll see a popup asking for authorization. Click **Authorize access**
6. Choose your Google account
7. You'll see a warning that the app isn't verified. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
8. Click **Allow** to grant permissions
9. Copy the **Web app URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

### Step 4: Configure Your Next.js App

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line with your Web app URL:

```env
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Replace `YOUR_SCRIPT_ID` with the actual URL you copied
4. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

## Testing

1. **Test the Apps Script directly:**
   - Open your Web app URL in a browser (it should show a JSON response)
   - This confirms the script is deployed and accessible

2. **Complete the quiz on your website:**
   - Open browser DevTools (F12) and go to the Console tab
   - Complete the quiz
   - Look for console logs showing "Submitting to Google Sheets" and the data payload
   - Check for any error messages

3. **Check your Google Sheet:**
   - The data should appear in a new row
   - If not, check the Apps Script "Executions" tab for errors

4. **Verify environment variable:**
   - Make sure `.env.local` exists in your project root
   - Make sure the variable name is exactly `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
   - Restart your dev server after adding/changing `.env.local`

## Troubleshooting

### Data not appearing in the sheet?

1. **Check the Web app URL:**
   - Open `.env.local` and verify the URL is correct
   - Make sure there are no extra spaces or quotes
   - The URL should end with `/exec`
   - Try opening the URL directly in a browser - it should show a JSON response

2. **Check environment variable is loaded:**
   - In browser console, you should see logs when submitting
   - If you see "NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL is not set", the env var isn't loading
   - Make sure you restarted the dev server after adding `.env.local`
   - Make sure the file is named exactly `.env.local` (not `.env` or `.env.local.txt`)

3. **Check permissions:**
   - Make sure you clicked "Anyone" when deploying
   - Make sure you authorized the script when prompted

4. **Check Apps Script execution:**
   - Go to Apps Script editor
   - Click "Executions" in the left sidebar
   - Look for recent executions and check for errors
   - Click on a failed execution to see the error details

5. **Check the sheet structure:**
   - Ensure column headers in row 1 match exactly: name, email, phone number, pain point, experience, peptide willingness, investment
   - Make sure the sheet isn't protected or read-only

6. **Check browser console:**
   - Look for CORS errors (shouldn't happen with Google Apps Script)
   - Look for network errors in the Network tab
   - Check if the POST request is being sent (look for the request to script.google.com)

### Getting CORS errors?

- Google Apps Script handles CORS automatically when deployed as a web app
- Make sure you're using `mode: 'no-cors'` in the fetch (already included in the code)

### "Script function not found" error?

- Make sure the function is named exactly `doPost` (case-sensitive)
- Make sure you saved the script before deploying

### Need to update the script?

1. Make your changes in Apps Script
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon (✏️) next to your deployment
4. Change the version to "New version"
5. Click **Deploy**
6. No need to update the URL - it stays the same!

## Security Notes

- The Web app URL is public, but it only allows POST requests
- Only data matching the expected format will be written
- You can add additional validation in the Apps Script if needed
- Consider adding rate limiting or authentication if you expect high traffic

## Data Mapping

The quiz data is automatically mapped to Google Sheets columns:

- **name** → Full name from the form
- **email** → Email address
- **phone** → Phone number
- **painPoint** → Derived from selected protocol:
  - Muscle Growth → "Slow or stalled muscle growth"
  - Fat Loss → "Stubborn fat that won't budge"
  - Brain Function → "Mental fog and lack of focus"
- **experience** → Peptide experience answer
- **peptideWillingness** → Peptide willingness answer
- **investment** → Health investment answer

That's it! No Google Cloud Console, no service accounts, no complex setup. Just copy, paste, and deploy! 🎉
