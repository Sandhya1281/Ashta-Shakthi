import { NextResponse } from 'next/server';

let serverContacts = [
  {
    id: 'msg-1',
    name: 'Deepak Rao',
    email: 'deepak.rao@example.com',
    phone: '+91 94480 12345',
    subject: 'CSR Partnership & Meal Sponsorship',
    message: 'Our company would like to sponsor monthly meal drives.',
    isRead: false,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export async function GET() {
  return NextResponse.json({ success: true, data: serverContacts });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newMsg = {
      ...body,
      id: `msg-${Date.now().toString().slice(-6)}`,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    serverContacts = [newMsg, ...serverContacts];
    return NextResponse.json({ success: true, data: newMsg }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit contact message' }, { status: 400 });
  }
}
