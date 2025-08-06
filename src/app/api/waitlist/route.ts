import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongo';
import Waitlist from '@/models/Waitlist';
import validator from 'validator';

export async function POST(request: Request) {
  try {
    const { email, honeypot } = await request.json();

    // 1. Honeypot check: If this field is filled, it's likely a bot.
    if (honeypot) {
      return new NextResponse(null, { status: 200 }); // Silently fail
    }
    
    // 2. Server-Side Validation
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json({ message: 'A valid email is required.' }, { status: 400 });
    }

    await connectToDatabase();

    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return NextResponse.json({ message: 'This email is already on the waitlist.' }, { status: 409 });
    }

    await Waitlist.create({ email });

    return NextResponse.json({ message: 'Success! You have been added to the waitlist.' }, { status: 201 });

  } catch (error: any) {
    // 3. Generic Error Handling
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}