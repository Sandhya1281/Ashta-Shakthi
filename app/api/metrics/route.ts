import { NextResponse } from 'next/server';
import { INITIAL_IMPACT_METRICS } from '@/lib/data';

let serverMetrics = [...INITIAL_IMPACT_METRICS];

export async function GET() {
  return NextResponse.json({ success: true, data: serverMetrics });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, value } = body;
    const index = serverMetrics.findIndex(m => m.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Metric not found' }, { status: 404 });
    }
    serverMetrics[index].value = value;
    return NextResponse.json({ success: true, data: serverMetrics[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update metric' }, { status: 400 });
  }
}
