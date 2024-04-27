import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import { Icon } from '@radix-ui/react-select';

export default function AboutStoreTile() {
  // const supabase = createClient();
  // const { data: profiles } = await supabase.from('profiles').select();
  return (
    <>
      <div className="flex items-start">
        <div className="h-48 w-48 min-w-48" style={{ marginTop: '1.5rem' }}>
          <Image
            src="/store-front.png"
            alt="Store-Front Photo"
            width={16}
            height={16}
            layout="responsive"
            className="rounded-lg"
            style={{ borderRadius: '1rem', border: '2px solid #00684A' }}
          />
        </div>

        <div className="flex-shrink gap-2 rounded-lg p-6">
          <div className="flex flex-col gap-1">
            <div className="rounded-3xl p-2">
              <h2 className="text-md font-bold">About Patient</h2>
              <div className="flex items-center">
                <Image
                  src="/location.png"
                  alt="Location Icon"
                  width={16}
                  height={16}
                  style={{ filter: 'hue-rotate(90deg)' }}
                />
                <h3 className="text-md">Anytown, London</h3>
              </div>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                modi magnam cum laborum reiciendis voluptatum assumenda illo
                quaerat numquam nobis quibusdam animi perspiciatis, deserunt
                sed, omnis aut? Delectus, maxime sint.
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
      </div>
    </>
  );
}
