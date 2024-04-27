import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';

export default async function AboutStoreTile() {
  const supabase = createClient();
  const { data: profiles } = await supabase.from('profiles').select();
  return (
    <>
      <div className="h-48 w-48 min-w-48 p-2">
        <Image
          src="/store-front.png"
          /* MAKE RESPONSIVE */
          alt="Store-Front Photo"
          width={16}
          height={16}
          layout="responsive"
          className="rounded-full"
        />
      </div>

      <div className="flex-shrink gap-2 p-6">
        <div className="flex flex-col gap-1">
          <div className="rounded-3xl p-2">
            <h2 className="text-md font-bold">About Patient</h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi
              magnam cum laborum reiciendis voluptatum assumenda illo quaerat
              numquam nobis quibusdam animi perspiciatis, deserunt sed, omnis
              aut? Delectus, maxime sint.
              {/* MAKE RESPONSIVE */}
            </p>
          </div>
          <div className="flex justify-between space-x-4 rounded-3xl p-2">
            <div>
              <h3 className="text-sm font-bold">Patient Name</h3>
              <p className="text-sm">
                John Doe
                {/* MAKE RESPONSIVE */}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Phone Number</h3>
              <p className="text-sm">
                +91 234 567 8901
                {/* MAKE RESPONSIVE */}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Address</h3>
              <p className="text-sm">
                123 Main St, Anytown, USA
                {/* MAKE RESPONSIVE */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
