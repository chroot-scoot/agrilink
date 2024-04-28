import Image from 'next/image';
import { SquarePen } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';
import AddForm from '@/components/addForm';

export default async function Product() {
  const supabase = createClient();
  let { data: product_profiles, error } = await supabase
    .from('product_profiles')
    .select('*')
    // Filters
    .eq('store_id', 'be348973-75b4-4d3d-85a8-d94403eadbc1');

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden md:table-cell">Total Sales</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
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
                <TableCell className="font-medium">{product_name}</TableCell>
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
      <AddForm />
    </div>
  );
}
