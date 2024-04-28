'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { submitSignup, signupFormSchema, type ISignupForm } from './form-util';

export function SignupForm() {
  const form = useForm<ISignupForm>({
    resolver: zodResolver(signupFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitSignup)}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="storename"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="Gajendra Farm" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={(field) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button className="w-full">
            <Link href="/dashboard" className="w-full">
              Login
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
