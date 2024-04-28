import { createClient } from '@/lib/supabase/server';
import fs from 'fs';
import util from 'util';
import { toast } from '@/components/ui/use-toast';

const { GoogleGenerativeAI } = require('@google/generative-ai');

// Convert fs.readFile into Promise version to use with async/await
const readFile = util.promisify(fs.readFile);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function llmResponse() {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const supabase = createClient();
  let { data: product_reviews, error } = await supabase
    .from('product_reviews')
    .select('product_review_content')
    .eq('product_id', 'dfa01413-e753-449a-8804-5d10c12716ae');

  // Read the JSON file
  const fileContent = await readFile('product_reviews', 'utf8');

  // Pass the file content in the prompt
  const prompt = `Summarize all the reviews in the given JSON file: ${fileContent} to two simple lines.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  if (error) {
    toast({
      title: 'Invalid',
    });
  } else return text;
}
