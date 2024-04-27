import { HoverEffect } from '@/components/ui/card-hover-effect';

async function getProducts() {
  return [
    {
      title: 'Product 1',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 1,
    },
    {
      title: 'Product 2',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 2,
    },
    {
      title: 'Product 3',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 3,
    },
    {
      title: 'Product 4',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 4,
    },
    {
      title: 'Product 5',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 5,
    },
  ];
}
export default async function product() {
  const Products = await getProducts();
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={Products} />
    </div>
  );
}
