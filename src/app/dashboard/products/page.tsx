import { HoverEffect } from '@/components/ui/card-hover-effect';

async function getProjects() {
  return [
    {
      title: 'Project 1',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 1,
    },
    {
      title: 'Project 2',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 2,
    },
    {
      title: 'Project 3',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 3,
    },
    {
      title: 'Project 4',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 4,
    },
    {
      title: 'Project 5',
      imageLink: 'https://via.placeholder.com/1080x900',
      id: 5,
    },
  ];
}
export default async function product() {
  const projects = await getProjects();
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
