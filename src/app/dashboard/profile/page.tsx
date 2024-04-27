'use client';

import AboutStoreTile from './components/avatar-name';

export default function Profile() {
  return (
    <>
      <div>Profile</div>
      <div className="flex min-w-full flex-grow items-center justify-between rounded-3xl p-2 backdrop-brightness-110">
        <AboutStoreTile />
      </div>
    </>
  );
}
