import { NextResponse } from 'next/server';
import { getWellnessTip } from '@/lib/python';

export async function GET() {
  const result = getWellnessTip();
  
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
