'use client';

import AboutStoreTile from './components/avatar-name';
import Sidebar from '@/components/layout/Sidebar/Sidebar';

export default function Profile() {
  return (
    <>
      <div className="--background flex min-w-full flex-grow items-center justify-between rounded-3xl p-2 backdrop-brightness-110">
        <AboutStoreTile />
      </div>
    </>
  );
}
