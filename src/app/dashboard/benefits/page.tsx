import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const posts = [
  {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
    subject: 'Pradhan Mantri Kisan Samman Nidhi',
    text: 'PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode. Till now, Rs. 2.81 lakh crores have been transferred through Direct Benefit Transfer (DBT) to more than 11 crores beneficiaries (Farmers) through various instalments.',
    date: '2023-10-22T09:00:00',
  },
  {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775b',
    subject: 'Pradhan Mantri Fasal Bima Yojana',
    text: 'PMFBY was launched in 2016 in order to provide a simple and affordable crop insurance product to ensure comprehensive risk cover for crops to farmers against all non-preventable natural risks from pre-sowing to post-harvest and to provide adequate claim amount. The scheme is demand driven and available for all farmers A total of 5549.40 lakh farmer applications were insured under the scheme since 2016-17 and Rs 150589.10 crore has been paid as claim.',
    date: '2023-10-22T09:00:00',
  },
  {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775c',
    subject: 'Pradhan Mantri Kisan MaanDhan Yojana',
    text: 'Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund. Similar, amount will be contributed by the Central Government. The applicants between the age group of 18 to 40 years will have to contribute between Rs. 55 to Rs. 200 per month till they attain the age of 60. PMKMY is taking care of the farmers during their old age and provides Rs. 3,000 monthly pension to the enrolled farmers once they attain 60 years of age, subject to exclusion criteria. Life Insurance Corporation (LIC) is pension fund manager and registration of beneficiaries is done through CSC and State Govts. So far 23.38 lakh farmers have enrolled under the scheme.',
    date: '2023-10-22T09:00:00',
  },
];

export default function Benefits() {
  return (
    <>
      <div className="flex items-center px-4 py-2">
        <h1 className="text-3xl font-bold">Posts</h1>
      </div>
      <Separator />
      <div className="flex h-fit flex-col">
        {posts.map(
          (post: {
            id: string;
            subject: string;
            text: string;
            date: string;
          }) => (
            <div className="flex flex-1 flex-col" key={post.id}>
              <div className="flex items-start p-4">
                <div className="flex items-start gap-4 text-sm">
                  <div className="grid gap-1">
                    <div className="font-semibold">{post.subject}</div>
                  </div>
                </div>
                {post.date && (
                  <div className="ml-auto text-xs text-muted-foreground">
                    {format(new Date(post.date), 'PPpp')}
                  </div>
                )}
              </div>
              <Separator />
              <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                {post.text}
              </div>
              <Separator />
            </div>
          )
        )}
      </div>
    </>
  );
}
