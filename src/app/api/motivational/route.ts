import { NextResponse } from 'next/server';
import { getMotivationalMessage } from '@/lib/python';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  
  const result = getMotivationalMessage(category);
  
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
