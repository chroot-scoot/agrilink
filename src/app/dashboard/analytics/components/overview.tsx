import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@/lib/supabase/server';

async function Reviews() {
  const supabase = createClient();
  const storeId = 'dfa01413-e753-449a-8804-5d10c12716ae';
  const { data: product_reviews } = await supabase
    .from('product_reviews')
    .select()
    .eq('product_id', storeId);

  const llmedResponse = await fetch('/api/llm/llm');
  if (llmedResponse.ok) {
    const llmedData = await llmedResponse.json();
    return llmedData;
  } else {
    return null;
  }
}

export async function getServerSideProps() {
  const llmedData = await Reviews();

  return {
    props: {
      llmedData,
    },
  };
}

export default function Overview({ llmedData }: { llmedData: any }) {
  const messages = [
    'A complex situation involving challenges and considerations.',
    'A scene of stability and anticipation, as individuals navigate through their tasks and responsibilities.',
    'Message 3',
  ];
  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-1">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>

          <CardContent>
            <CardHeader className="text-2xl font-bold"></CardHeader>
            {llmedData !== null ? (
              <CardContent className="text-xs text-muted-foreground">
                {llmedData}
              </CardContent>
            ) : (
              <div>Loading...</div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
