import Image from 'next/image';
import { SquarePen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';
import AddForm from '@/components/addForm';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default async function Product() {
  const supabase = createClient();
  let { data: product_profiles, error } = await supabase
    .from('product_profiles')
    .select('*')
    // Filters
    .eq('store_id', 'be348973-75b4-4d3d-85a8-d94403eadbc1');

  return (
    <div className="fixed overflow-hidden">
      <div className="min-w-screen h-fit w-screen flex-1 space-y-4 pl-2 md:pl-4">
        <Tabs defaultValue="all">
          <div className="flex w-fit max-w-fit items-center justify-between gap-96 space-y-2 md:flex-row">
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            {/* <AddForm /> */}
            <Link href="/dashboard/products/add" className="p-5">
              <Button variant="outline">Add Product</Button>
            </Link>
          </div>
          <Separator />
          <TabsContent value="all" className="min-w-screen mt-2 w-screen">
            <ScrollArea className="h-screen w-[70%]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Total Sales
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product_profiles!.map(
                    (
                      {
                        product_name,
                        product_image_url,
                        product_price,
                        product_total_sales,
                        product_rating,
                        product_created_at,
                        product_id,
                      }: {
                        product_name: string;
                        product_image_url: string;
                        product_price: string;
                        product_total_sales: number;
                        product_rating: number;
                        product_created_at: string;
                        product_id: number;
                      },
                      index
                    ) => (
                      <TableRow key={index}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt={product_name}
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={product_image_url}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {product_name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product_price}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product_total_sales}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product_created_at}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {product_rating}
                        </TableCell>
                        <TableCell>
                          <Link href={`/dashboard/products/${product_id}`}>
                            <SquarePen />
                          </Link>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          {/* <AddForm /> */}
        </Tabs>
      </div>
    </div>
  );
}
