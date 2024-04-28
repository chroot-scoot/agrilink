import { ScrollArea } from '@/components/ui/scroll-area';
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

import { createClient } from '@/lib/supabase/server';

import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
export default async function Dashboard({ params }: { params: any }) {
  const supabase = createClient();

  let { data: product_profiles, error } = await supabase
    .from('product_profiles')
    .select('*')
    .eq('product_id', params.productId);

  let { data: products_reviews } = await supabase
    .from('product_reviews')
    .select('*')
    .eq('product_id', params.productId);

  return (
    <>
      <div className="z-10 flex min-h-screen w-full flex-col bg-muted/40">
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
                  {product_profiles![0].product_name}
                </h1>
                {product_profiles![0].is_organic && (
                  <Badge variant="outline" className="ml-auto sm:ml-0">
                    Organic
                  </Badge>
                )}
                {product_profiles![0].is_seasonal && (
                  <Badge variant="outline" className="ml-auto sm:ml-0">
                    Seasonal
                  </Badge>
                )}
                {product_profiles![0].product_inventory === 0 && (
                  <Badge variant="destructive" className="ml-auto sm:ml-0">
                    Out of Stock
                  </Badge>
                )}
                {product_profiles![0].product_inventory != 0 && (
                  <Badge variant="outline" className="ml-auto sm:ml-0">
                    In Stock
                  </Badge>
                )}
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
                      <CardDescription>
                        {product_profiles![0].about_product}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue={product_profiles![0].product_name}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            defaultValue={product_profiles![0].about_product}
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
                    <CardContent></CardContent>
                  </Card>
                  <Card>
                    <ScrollArea className="h-72  rounded-md border">
                      <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">
                          Reviews
                        </h4>
                        {products_reviews!.map((review, index) => (
                          <React.Fragment key={index}>
                            <Card>
                              <CardHeader>
                                <CardTitle>{`Review`}</CardTitle>
                                <CardDescription>
                                  {review.product_reviewer}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                {review.product_review_content}
                              </CardContent>
                              <CardFooter>
                                {review.given_product_rating}
                              </CardFooter>
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
                        {product_profiles![0].product_rating} out of 5
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex">
                      {Array.from({
                        length: product_profiles![0].product_rating,
                      }).map((_, idx) => (
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
