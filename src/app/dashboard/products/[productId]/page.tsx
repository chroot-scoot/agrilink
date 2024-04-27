'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';
import Link from 'next/link';
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { title } from 'process';
import React from 'react';
export default function Dashboard({ params }: { params: any }) {
  const products = {
    title: params.productId,
    badges: ['In Stock', 'Organic'],
    description: `hello i am product ${params.productId}`,
    reviews: [
      {
        title: 'review1',
        description: 'review1 description',
        author: 'author1',
        rating: 4,
      },
      {
        title: 'review2',
        description: 'review2 description',
        author: 'author1',
        rating: 4,
      },
    ],
    rating: 9,
  };

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Link href={`/dashboard/products/`}>
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  {products.title}
                </h1>
                {products.badges.map((badge, idx) => (
                  <Badge
                    key={idx}
                    variant={
                      badge == 'out of stock' ? 'destructive' : 'outline'
                    }
                    className="ml-auto sm:ml-0"
                  >
                    {badge}
                  </Badge>
                ))}
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Save Product</Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Product Details</CardTitle>
                      <CardDescription>{products.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue={products.title}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            defaultValue={products.description}
                            className="min-h-32"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Product Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <Checkbox id="organic" />
                        <label htmlFor="organic" className="">
                          Organic
                        </label>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <Checkbox id="seasonal" />
                        <label htmlFor="seasonal">Seasonal</label>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <ScrollArea className="h-72  rounded-md border">
                      <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">
                          Reviews
                        </h4>
                        {products.reviews.map((review, index) => (
                          <React.Fragment key={index}>
                            <Card>
                              <CardHeader>
                                <CardTitle>{review.title}</CardTitle>
                                <CardDescription>
                                  {review.author}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>{review.description}</CardContent>
                              <CardFooter>{review.rating}</CardFooter>
                            </Card>
                            <Separator className="my-2" />
                          </React.Fragment>
                        ))}
                      </div>
                    </ScrollArea>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-3">
                    <CardHeader>
                      <CardTitle>Product Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="status">Status</Label>
                          <Select>
                            <SelectTrigger
                              id="status"
                              aria-label="Select status"
                            >
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="out of stock">
                                Out of Stock
                              </SelectItem>
                              <SelectItem value="In Stock">In Stock</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="overflow-hidden"
                    x-chunk="dashboard-07-chunk-4"
                  >
                    <CardHeader>
                      <CardTitle>Product Images</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src="/placeholder.svg"
                          width="300"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <button>
                            <Image
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src="/placeholder.svg"
                              width="84"
                            />
                          </button>
                          <button>
                            <Image
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src="/placeholder.svg"
                              width="84"
                            />
                          </button>
                        </div>
                        <Input id="picture" type="file" className="" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                      <CardTitle>Rating of Product</CardTitle>
                      <CardDescription>
                        {products.rating} out of 5
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                      {Array.from({ length: products.rating }).map((_, idx) => (
                        <Star key={idx} />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
