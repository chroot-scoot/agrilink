'use server';

import { createClient } from '@/lib/supabase/server';
import { env } from '@/env';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function llmResponse(productId: string) {
  const genAI = new GoogleGenerativeAI(env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const supabase = createClient();
  let { data, error } = await supabase
    .from('product_reviews')
    .select('product_review_content')
    .eq('product_id', productId);

  if (!data || error) {
    return;
  }

  const prompt = `Summarize all the reviews in the given JSON file: ${data} to two simple lines.`;

  const result = await model.generateContent(prompt);
  const response = (await result.response).text();

  return response;
}
