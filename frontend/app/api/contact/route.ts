import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.bot_field) {
      // Return 200 to trick the bot
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!body.fullName || !body.contact || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Forward to the backend support ticket API
    // e.g., await fetch('https://api.carqconnect.com/v1/support/tickets', { ... })

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
