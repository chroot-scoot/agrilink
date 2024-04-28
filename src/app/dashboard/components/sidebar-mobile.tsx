import {
  PackageSearch,
  PieChart,
  Gem,
  Handshake,
  Warehouse,
  Leaf,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { type ReactNode } from 'react';

const menuItemsList = [
  {
    name: 'Products',
    icon: <PackageSearch className="h-4 w-4" />,
    path: '/dashboard/products',
  },
  {
    name: 'Analytics',
    icon: <PieChart className="h-5 w-5" />,
    path: '/dashboard/analytics',
  },
  {
    name: 'Benefits',
    icon: <Gem className="h-5 w-5" />,
    path: '/dashboard/benefits',
  },
  {
    name: 'Community',
    icon: <Handshake className="h-5 w-5" />,
    path: '/dashboard/community',
  },
  {
    name: 'Inventory',
    icon: <Warehouse className="h-5 w-5" />,
    path: '#',
  },
];

export function SideBarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Leaf className="h-6 w-6" />
            <span className="sr-only">Agri Link</span>
          </Link>
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
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                {icon}
                {name}
              </Link>
            )
          )}
        </nav>
        {/* <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </SheetContent>
    </Sheet>
  );
}
