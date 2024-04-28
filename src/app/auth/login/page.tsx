import Link from 'next/link';
import { LoginForm } from './form';

export default function Login() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below
        </p>
      </div>
      <LoginForm />
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <Link href="/auth/signup" className="underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
