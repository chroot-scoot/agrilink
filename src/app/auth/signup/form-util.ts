'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { createClient } from '@/lib/supabase/server';

export const signupFormSchema = z.object({
  storename: z.string().min(2),
  email: z.string().email({ message: 'Please provide a valid Email' }),
  password: z
    .string()
    .min(8, { message: 'Passwords must be 8 characters long' }),
});

export type ISignupForm = z.infer<typeof signupFormSchema>;

export async function submitSignup(formData: ISignupForm) {
  const storename = formData.storename;
  const email = formData.email;
  const password = formData.password;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: '/api/auth',
    },
  });

  if (error) {
    toast({
      title: 'Could not authenticate user',
    });
  } else {
    redirect('/auth/signup/success');
  }
}
