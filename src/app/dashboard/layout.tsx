import { Inter } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import Header from '@/components/layout/Header/Header';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-custom relative flex items-start justify-between bg-cover bg-fixed`}
      >
        <div className="fixed hidden min-h-screen w-1/5 border-r lg:flex">
          <Sidebar />
        </div>
        <div className="hidden w-1/5 border-r lg:flex"></div>
        <main className="ml-64 grid h-full w-full">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
