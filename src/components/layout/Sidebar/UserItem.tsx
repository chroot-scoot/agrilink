'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UserItem() {
  return (
    <div className="flex items-center justify-normal gap-2 rounded-[12px] border p-1">
      <div className="avatar flex min-h-12 min-w-12 items-center justify-center rounded-full bg-teal-500 font-[700] text-white">
        <p>PD</p>
      </div>
      <Link href="/profile">
        <Button variant="link" size="sm">
          <div className="grow">
            <p className="truncate text-[16px] font-bold">Pulkit Dwivedi</p>
            <p className="truncate text-[12px] text-neutral-500">NR306F3</p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
