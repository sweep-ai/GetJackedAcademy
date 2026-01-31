import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
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
      body: JSON.stringify(body),
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



