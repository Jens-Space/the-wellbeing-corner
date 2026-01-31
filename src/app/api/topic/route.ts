import { NextResponse } from 'next/server';
import { getTopicOverview } from '@/lib/python';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic') || 'anxiety';
  
  const result = getTopicOverview(topic);
  
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
