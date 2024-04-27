'use client';
import { useRouter } from 'next/router';

export default function Pid() {
  const router = useRouter();
  const { pid } = router.query;

  return <div className="mx-auto max-w-5xl px-8">Hello, {pid}</div>;
}
