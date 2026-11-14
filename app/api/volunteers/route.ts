import { NextResponse } from 'next/server';

// Server-side in-memory cache fallback for API endpoints
let serverVolunteers = [
  {
    id: 'vol-101',
    fullName: 'Ananya Sharma',
    email: 'ananya.s@example.com',
    phone: '+91 98765 43210',
    age: '22',
    city: 'Bengaluru (Koramangala)',
    occupation: 'Engineering Student, RVCE',
    interests: ['Teaching', 'Social Media', 'Content Creation'],
    availability: 'Weekends (Saturday & Sunday mornings)',
    skills: 'English storytelling, basic math tutoring, graphic design',
    experience: 'Previous volunteer mentor at local community literacy camp.',
    motivation: 'I believe every child deserves breakfast before being asked to learn algebra.',
    resumeFileName: 'Ananya_Sharma_Profile.pdf',
    consent: true,
    status: 'New',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export async function GET() {
  return NextResponse.json({ success: true, data: serverVolunteers });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newVol = {
      ...body,
      id: `vol-${Date.now().toString().slice(-6)}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    serverVolunteers = [newVol, ...serverVolunteers];
    return NextResponse.json({ success: true, data: newVol }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;
    const index = serverVolunteers.findIndex(v => v.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Volunteer not found' }, { status: 404 });
    }
    serverVolunteers[index].status = status;
    return NextResponse.json({ success: true, data: serverVolunteers[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 400 });
  }
}
