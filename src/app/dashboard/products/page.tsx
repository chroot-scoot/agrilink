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

const productDummyList = [
  {
    title: 'Product 1',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 1,
  },
  {
    title: 'Product 2',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 2,
  },
  {
    title: 'Product 3',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 3,
  },
  {
    title: 'Product 4',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 4,
  },
  {
    title: 'Product 5',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 5,
  },
  {
    title: 'Product 6',
    imageLink: '',
    price: '$499.99',
    totalSales: 25,
    createdAt: '2023-07-12 10:42 AM',
    rating: 4.8,
    id: 6,
  },
];

export default function Product() {
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
          {productDummyList.map(
            (
              {
                title,
                imageLink,
                price,
                totalSales,
                rating,
                createdAt,
                id,
              }: {
                title: string;
                imageLink: string;
                price: string;
                totalSales: number;
                rating: number;
                createdAt: string;
                id: number;
              },
              index
            ) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={title}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={imageLink}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell className="hidden md:table-cell">{price}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {totalSales}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {createdAt}
                </TableCell>
                <TableCell className="hidden md:table-cell">{rating}</TableCell>
                <TableCell>
                  <Link href={`/dashboard/products/${id}`}>
                    <SquarePen />
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}
