import { NextRequest, NextResponse } from 'next/server';
import { llmResponse } from './llm';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('product_id');

  if (!productId) {
    NextResponse.error();
    return;
  }
  const res = await llmResponse(productId);

  if (!res) {
    NextResponse.error();
    return;
  }

  NextResponse.json({ res });
}
