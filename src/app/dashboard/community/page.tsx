'use client';
import { Search } from 'lucide-react';

import { PostDislplay } from '@/app/dashboard/community/components/post-display';
import { PostList } from '@/app/dashboard/community/components/posts-list';
import { posts } from '@/app/dashboard/community/data';
import { usePost } from '@/app/dashboard/community/use-post';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function Post() {
  const defaultLayout = [705, 655];
  const [post] = usePost();

  return (
    <div className="fixed overflow-hidden">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="h-full max-h-[800px] items-stretch"
        >
          <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">Posts</h1>
              </div>
              <Separator />
              <TabsContent value="all" className="mt-2">
                <PostList items={posts} />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]}>
            <PostDislplay
              mail={posts.find((item) => item.id === post.selected) || null}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
