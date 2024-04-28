'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
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
  const [formState, setFormState] = useState({
    product_name: '',
    about_product: '',
    product_price: '',
    is_organic: false,
    is_seasonal: false,
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setFormState({
        ...formState,
        category: {
          ...formState.category,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setFormState({
        ...formState,
        [e.target.id]: e.target.value,
      });
    }
  };

  // Initialize Supabase client
  const supabase = createClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update formState with store_id
    setFormState((prevState) => ({
      ...prevState,
      store_id: 'be348973-75b4-4d3d-85a8-d94403eadbc1',
    }));

    // Use a timeout to ensure the state has been updated before logging it
    setTimeout(async () => {
      console.log(formState);

      const { data, error } = await supabase
        .from('product_profiles')
        .insert([{ ...formState }])
        .select();

      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    }, 0);
  };
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Card className="z-10 max-h-[70%] w-[35%]">
        <CardHeader>
          <CardTitle className="text-2xl">Add Product</CardTitle>
          <CardDescription>Add Details Here</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex-col justify-normal gap-1">
              <Label id="product_name">Product Name</Label>
              <Input
                id="product_name"
                name="product_name"
                type="text"
                placeholder="Product Name"
                required
                onChange={handleChange}
              />
              <Label id="about_product">About Product</Label>
              <Input
                id="about_product"
                name="about_product"
                type="text"
                placeholder="About Product"
                required
                onChange={handleChange}
              />
              <Label id="product_price">Product Price</Label>
              <Input
                id="product_price"
                name="product_price"
                type="number"
                placeholder="Product Price"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mt-5 flex justify-around">
              <Label id="is_organic">Is Organic?</Label>
              <Checkbox
                name="is_organic"
                id="is_organic"
                onChange={handleChange}
              />

              <Label id="is_seasonal">Is Seasonal?</Label>
              <Checkbox
                id="is_seasonal"
                name="is_seasonal"
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
