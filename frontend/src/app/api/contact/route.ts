import { NextResponse } from 'next/server';

function sanitize(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: Request) {
  try {
    const rawData = await request.json();

    const name = sanitize(rawData.name);
    const company = sanitize(rawData.company);
    const email = sanitize(rawData.email);
    const phone = sanitize(rawData.phone);
    const service = sanitize(rawData.service);
    const budget = sanitize(rawData.budget);
    const timeline = sanitize(rawData.timeline);
    const preferredContact = sanitize(rawData.preferredContact);
    const message = sanitize(rawData.message);

    // 1. Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid business or personal email address.' },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, '').length < 8) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number (minimum 8 digits).' },
        { status: 400 }
      );
    }

    const leadPayload = {
      name,
      company: company || 'N/A',
      email,
      phone,
      service: service || 'General Inquiry',
      budget: budget || 'To be discussed',
      timeline: timeline || 'Flexible',
      preferredContact: preferredContact || 'WhatsApp',
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
      source: 'cwd-technologies.vercel.app',
    };

    // 2. Structured Lead Logging
    console.log('[CWD TECHNOLOGIES NEW LEAD INQUIRY]', JSON.stringify(leadPayload, null, 2));

    // 3. Optional Webhook / Express Backend Forwarding
    const backendUrl = process.env.BACKEND_API_URL || process.env.LEAD_WEBHOOK_URL;
    if (backendUrl) {
      try {
        await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload),
          signal: AbortSignal.timeout(3000),
        });
      } catch (err) {
        console.warn('[CWD Contact API] Webhook forward failed gracefully:', err);
      }
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your requirement has been securely submitted to CWD Technologies. Our team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Internal Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again or reach out on WhatsApp.' },
      { status: 500 }
    );
  }
}
