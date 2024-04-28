import Link from 'next/link';
import {
  Leaf,
  Bell,
  PackageSearch,
  PieChart,
  Gem,
  Handshake,
  Warehouse,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type ReactNode } from 'react';

const menuItemsList = [
  {
    name: 'Products',
    icon: <PackageSearch className="h-4 w-4" />,
    path: '/dashboard/products',
  },
  {
    name: 'Analytics',
    icon: <PieChart className="h-4 w-4" />,
    path: '/dashboard/analytics',
  },
  {
    name: 'Benefits',
    icon: <Gem className="h-4 w-4" />,
    path: '/dashboard/benefits',
  },
  {
    name: 'Community',
    icon: <Handshake className="h-4 w-4" />,
    path: '/dashboard/community',
  },
  {
    name: 'Inventory',
    icon: <Warehouse className="h-4 w-4" />,
    path: '#',
  },
];

function SideBarWideMenu() {
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {menuItemsList.map(
            (
              {
                name,
                icon,
                path,
              }: { name: string; icon: ReactNode; path: string },
              index
            ) => (
              <Link
                key={index}
                href={path}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                {icon}
                {name}
              </Link>
            )
          )}
        </nav>
      </div>
      {/* <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div> */}
    </>
  );
}

export function SideBarWide() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Leaf className="h-6 w-6" />
            <span className="">Agri Link</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <SideBarWideMenu />
      </div>
    </div>
  );
}
