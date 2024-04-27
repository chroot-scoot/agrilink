'use client';

import AboutStoreTile from './components/avatar-name';

export default function Profile() {
  return (
    <>
      <div className="flex min-w-full flex-grow items-center justify-between rounded-3xl bg-green-100 p-2 backdrop-brightness-110">
        <AboutStoreTile />
      </div>
    </>
  );
}
