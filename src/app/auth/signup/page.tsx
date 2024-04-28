import Link from 'next/link';
import { SignupForm } from './form';

export default function SignUp() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-balance text-muted-foreground">
          Enter your details below
        </p>
      </div>
      <SignupForm />
      <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link href="/auth/login" className="underline">
          Log In
        </Link>
      </div>
    </div>
  );
}
