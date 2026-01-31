import { NextResponse } from 'next/server';
import { getResourceRecommendations } from '@/lib/python';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get('topic') || 'stress';
  const ageGroup = searchParams.get('ageGroup') || 'adults';
  
  const result = getResourceRecommendations(topic, ageGroup);
  
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
