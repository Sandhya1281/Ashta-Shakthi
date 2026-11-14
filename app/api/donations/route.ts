import { NextResponse } from 'next/server';

let serverDonations = [
  {
    id: 'don-1001',
    donationType: 'monthly',
    amount: 1200,
    purpose: 'Nutrition + Learning Kit',
    donorName: 'Priya Sundaram',
    email: 'priya.s@example.com',
    phone: '+91 98451 12233',
    city: 'Bengaluru',
    pan: 'ABCDE1234F',
    paymentStatus: 'COMPLETED_DEMO',
    transactionId: 'TXN_ASTHA_9847281',
    receiptNumber: 'ASTHA/2024-25/0842',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export async function GET() {
  return NextResponse.json({ success: true, data: serverDonations });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const now = new Date();
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newDonation = {
      ...body,
      id: `don-${Date.now().toString().slice(-6)}`,
      transactionId: `TXN_GATEWAY_${randomHex}`,
      receiptNumber: `ASTHA/${now.getFullYear()}-${(now.getFullYear()+1).toString().slice(-2)}/${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: now.toISOString()
    };
    serverDonations = [newDonation, ...serverDonations];
    return NextResponse.json({ success: true, data: newDonation }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to record donation' }, { status: 400 });
  }
}
