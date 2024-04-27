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
    <div>
      <div className="fixed inset-0 overflow-hidden">
        <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <SideBarWide />
          <div className="z-50 flex h-14 flex-col overflow-auto">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <SideBarMobile />
              <div className="w-full flex-1">
                <SearchBar />
              </div>
              <AccountMenu />
            </header>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block"></div>
          <main className="z-0 flex flex-1 flex-col gap-4 overflow-auto pt-16 lg:gap-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
