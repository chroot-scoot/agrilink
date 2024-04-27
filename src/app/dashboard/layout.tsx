import { SideBarWide } from './sidebar-wide';
import { SideBarMobile } from './sidebar-mobile';
import { AccountMenu } from './account-dropdown';
import { SearchBar } from './serch-bar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBarWide />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <SideBarMobile />
          <div className="w-full flex-1">
            <SearchBar />
          </div>
          <AccountMenu />
        </header>
        {/* <main className="flex flex-1 flex-col gap-4  p-4 lg:gap-6 lg:p-6"> */}
        {children}
        {/* </main> */}
      </div>
    </div>
  );
}
