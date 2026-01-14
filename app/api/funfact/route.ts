import { NextResponse } from 'next/server';
import { getCurrentFunFact } from '@/lib/funfacts';

export async function GET() {
  try {
    const funfact = getCurrentFunFact();

    return NextResponse.json(funfact);
  } catch (error) {
    console.error('Error fetching fun fact:', error);
    
    return NextResponse.json(
      { error: 'No fun facts available' },
      { status: 500 }
    );
  }
}
