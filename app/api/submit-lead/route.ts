import { NextRequest, NextResponse } from 'next/server';
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Enforce valid phone: real number with country code
    const rawPhone = typeof body?.phone === 'string' ? body.phone.trim() : '';
    if (!rawPhone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }
    const phoneNumber = parsePhoneNumberFromString(rawPhone, 'US');
    if (!phoneNumber || !isValidPhoneNumber(rawPhone)) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number with country code (e.g. +1 555 123 4567)' },
        { status: 400 }
      );
    }

    // Normalize and ensure country code is in payload for the sheet
    const payload = {
      ...body,
      phone: phoneNumber.format('E.164'),
      phoneCountryCode: body.phoneCountryCode || `+${phoneNumber.countryCallingCode}`,
    };

    const googleAppsScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (!googleAppsScriptUrl) {
      return NextResponse.json(
        { error: 'Google Apps Script URL not configured' },
        { status: 500 }
      );
    }

    // Forward the request to Google Apps Script
    const response = await fetch(googleAppsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      return NextResponse.json(result, { status: 200 });
    } else {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      return NextResponse.json(
        { error: 'Failed to submit to Google Sheets', details: errorText },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error('Error in submit-lead API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit lead data',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}





