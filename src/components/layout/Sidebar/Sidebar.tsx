'use client';

import UserItem from './UserItem';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Hospital,
  Bed,
  CalendarCheck,
  UserPlus,
  CalendarPlus,
  Radio,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menuItemsList = [
    {
      group: 'IV Control',
      items: [
        {
          name: 'All Beds',
          icon: <Bed />,
          path: '/ivs',
        },
        {
          name: 'Connect New',
          icon: <Radio />,
          path: '/ivs/add',
        },
      ],
    },
    {
      group: 'Patients',
      items: [
        {
          name: 'All Patients',
          icon: <Hospital />,
          path: '/patients',
        },
        {
          name: 'Add New',
          icon: <UserPlus />,
          path: '/patients/add',
        },
      ],
    },
    {
      group: 'Appointments',
      items: [
        {
          name: 'All Appointments',
          icon: <CalendarCheck />,
          path: '/appointments',
        },
        {
          name: 'Create New',
          icon: <CalendarPlus />,
          path: '/appointments/add',
        },
      ],
    },
  ];
  const settingsItemsList = [
    {
      group: 'Settings',
      items: [
        {
          name: 'Notifications',
          icon: <Bell size={20} strokeWidth={1} />,
          path: '/notifications',
        },
        {
          name: 'Settings',
          icon: <Settings size={20} strokeWidth={1} />,
          path: '/settings',
        },
        {
          name: 'Logout',
          icon: <LogOut size={20} strokeWidth={1} />,
          path: '/logout',
        },
      ],
    },
  ];

  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuItemsList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link href={option.path} key={optionKey}>
                    <CommandItem
                      key={optionKey}
                      className="flex cursor-pointer gap-2"
                    >
                      {option.icon}
                      {option.name}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>

      <div>
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {settingsItemsList.map((menu: any, key: number) => (
              <CommandGroup key={key}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link href={option.path} key={optionKey}>
                    <CommandItem
                      key={optionKey}
                      className="flex cursor-pointer gap-2 text-sm text-gray-600"
                    >
                      {option.icon}
                      {option.name}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
