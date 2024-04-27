import { createClient } from '@/lib/supabase/server';
import { llmResponse } from './llm';

export async function GET() {
  const response = await llmResponse();
  const res = await fetch(response);

  return Response.json(res);
}
