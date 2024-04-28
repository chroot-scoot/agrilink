'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { createClient } from '@/lib/supabase/server';
export const addProductFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.unknown(),
});

export type ILoginForm = z.infer<typeof loginFormSchema>;

export async function submitLogin(formData: ILoginForm) {
  const email = formData.email;
  const password = formData.password;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast({
      title: 'Invalid Credentials',
    });
  }

  return redirect('/dashboard');
}
