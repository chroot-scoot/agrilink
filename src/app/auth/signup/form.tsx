'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="Rajendra" {...field} />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2">
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="Suthar" {...field} />
                  </FormControl>
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
                    <Input placeholder="****" />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
