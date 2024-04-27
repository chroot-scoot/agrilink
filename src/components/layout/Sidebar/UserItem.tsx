'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UserItem() {
  const user = {
    name: 'Pulkit Dwivedi',
    id: 'NR306F3',
  };
  const initials = user.name
    .split(' ')
    .map((namePart) => namePart[0].toUpperCase())
    .join('');

  return (
    <div className="flex items-center justify-normal gap-2 rounded-[12px] border p-1">
      <div className="avatar flex min-h-12 min-w-12 items-center justify-center rounded-full bg-teal-500 font-[700] text-white">
        <p>{initials}</p>
      </div>
      <Link href="/dashboard/profile">
        <Button variant="link" size="sm">
          <div className="grow">
            <p className="truncate text-[16px] font-bold">{user.name}</p>
            <p className="truncate text-[12px] text-neutral-500">{user.id}</p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
