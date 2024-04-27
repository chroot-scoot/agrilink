'use client';

import UserItem from './UserItem';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  PieChart,
  Handshake,
  Gem,
  Warehouse,
  PackageSearch,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menuItemsList = [
    {
      name: 'Products',
      icon: <PackageSearch />,
      path: '/dashboard/products',
    },
    {
      name: 'Analytics',
      icon: <PieChart />,
      path: '/dashboard/analytics',
    },
    {
      name: 'Benefits',
      icon: <Gem />,
      path: '/dashboard/benefits',
    },
    {
      name: 'Community',
      icon: <Handshake />,
      path: '/dashboard/community',
    },
    {
      name: 'Inventory',
      icon: <Warehouse />,
      path: '#',
    },
  ];
  const settingsItemsList = [
    {
      name: 'Notifications',
      icon: <Bell size={20} strokeWidth={1} />,
      path: '#',
    },
    {
      name: 'Settings',
      icon: <Settings size={20} strokeWidth={1} />,
      path: '#',
    },
    {
      name: 'Logout',
      icon: <LogOut size={20} strokeWidth={1} />,
      path: '/logout',
    },
  ];

  return (
    <div className="min-w-1/5 fixed flex min-h-screen w-1/5 flex-col gap-4 p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuItemsList.map((option: any, optionKey: number) => (
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
          </CommandList>
        </Command>
      </div>

      <div>
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {settingsItemsList.map((option: any, optionKey: number) => (
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
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
