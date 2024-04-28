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
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { submitLogin, loginFormSchema, type ILoginForm } from './form-util';

export function LoginForm() {
  const form = useForm<ILoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitLogin)}>
        <div className="grid gap-4">
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
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                      type="password"
                    />
                  </FormControl>
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
