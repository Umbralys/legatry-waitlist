// src/app/api/demo/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongo';
import DemoRequest from '@/models/DemoRequest';
import validator from 'validator';

export async function POST(request: Request) {
  try {
    const { name, email, phone, urgency, honeypot } = await request.json();

    // 1. Honeypot check
    if (honeypot) {
      return new NextResponse(null, { status: 200 }); // Silently fail
    }

    // 2. Server-Side Validation
    if (!name || !email || !phone || !urgency) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
    }
    if (!validator.isMobilePhone(phone.replace(/\D/g, ''), 'any', { strictMode: false })) {
        return NextResponse.json({ message: 'Please provide a valid phone number.'}, { status: 400 });
    }

    // Validate urgency field
    const validUrgencyOptions = [
      'planning-ahead',
      'recent-loss', 
      'organizing-documents',
      'estate-planning',
      'family-history',
      'financial-planning',
      'other'
    ];
    if (!validUrgencyOptions.includes(urgency)) {
      return NextResponse.json({ message: 'Please select a valid option for your situation.' }, { status: 400 });
    }

    await connectToDatabase();

    const existingRequest = await DemoRequest.findOne({ email });
    if (existingRequest) {
      return NextResponse.json({ message: 'A demo request for this email already exists.' }, { status: 409 });
    }

    await DemoRequest.create({ name, email, phone, urgency });

    return NextResponse.json({ message: 'Success! We will contact you soon to schedule your demo.' }, { status: 201 });

  } catch (error: any) {
    // 3. Generic Error Handling
    console.error('Demo Request API Error:', error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}