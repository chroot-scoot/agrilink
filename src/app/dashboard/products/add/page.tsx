import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function Adpage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Add Product</CardTitle>
        <CardDescription>Add Details Here</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">name</Label>
            <Input id="name" type="string" placeholder="name" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="description">Description</Label>
            </div>
            <Input
              id="description"
              type="text"
              required
              placeholder="Enter Description"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="Price" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <div className="flex">
              <Checkbox id="organic" />
              <Label htmlFor="organic" className=" pl-0">
                Organic
              </Label>
              <Checkbox id="seasonal" />
              <Label htmlFor="seasonal" className="pl-0">
                Seasonal
              </Label>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function Add() {
  return (
    <>
      <div className="grid w-[150rem] gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input id="description" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input id="price" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="image" className="text-right">
            Image
          </Label>
          <Input id="image" className="w-[17rem]" type="file" />
        </div>
        <div className="flex  items-center gap-4">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <Checkbox />
          <Label htmlFor="organic" className="pl-0 text-left">
            Organic
          </Label>
          <Checkbox />
          <Label htmlFor="seasonal" className="pl-0 text-left">
            Seasonal
          </Label>
        </div>
      </div>
    </>
  );
}
