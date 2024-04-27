import { createClient } from '@/lib/supabase/server';

export async function exchangeCodeForSession(url: string) {
  const requestUrl = new URL(url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign up process completes
  return `${requestUrl.origin}/protected`;
}
