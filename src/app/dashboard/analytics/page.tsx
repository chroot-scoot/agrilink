import { CalendarDateRangePicker } from './date-range-picker';
import { Analytics } from './analytic';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics" className="space-y-4">
            <Analytics />
          </TabsContent>
          <TabsContent value="overview"></TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
