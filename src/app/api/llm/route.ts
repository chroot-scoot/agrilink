import { NextRequest, NextResponse } from 'next/server';
import { llmResponse } from './llm';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = 'dfa01413-e753-449a-8804-5d10c12716ae';

  if (!productId) {
    NextResponse.error();
    return;
  }
  const res = await llmResponse();

  if (!res) {
    NextResponse.error();
    return;
  }

  NextResponse.json({ res });
}
