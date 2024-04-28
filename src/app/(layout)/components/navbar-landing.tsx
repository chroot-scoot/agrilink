'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function NavbarDemo() {
  return (
    <div className="relative flex w-full items-center justify-center bg-green-50">
      <Navbar className="top-2 bg-green-50" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl bg-green-50',
        className
      )}
    >
      <div className="flex items-end justify-end gap-4 rounded-3xl">
        <Link href="/aboutus">
          <Button className="w-full rounded-full bg-green-900">About Us</Button>
        </Link>
        <Link href="/auth/signup">
          <Button className="w-full rounded-full bg-green-900">Sign Up</Button>
        </Link>
        <Link href="/auth/login">
          <Button className="w-full rounded-full bg-green-900">Login</Button>
        </Link>
      </div>
    </div>
  );
}
