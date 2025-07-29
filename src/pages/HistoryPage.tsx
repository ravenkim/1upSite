import MobileLayout from '@/layouts/MobileLayout.tsx'

import {
    Timeline,
    TimelineDescription,
    TimelineHeader,
    TimelineItem,
    TimelineTime,
    TimelineTitle,
} from '@/components/ui/timeline.tsx'


export type TimelineItemType = {
    id: number;
    title: string;
    description?: string;
    time: string;
};

export default function HistoryPage() {
    const timelineData: TimelineItemType[] = [
        {
            id: 1,
            title: 'Vercel was founded in SF, USA',
            description:
                'Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework.',
            time: 'May, 2020',
        },
        {
            id: 2,
            title: 'Shadcn First Commit',
            description:
                'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
            time: 'January, 2023',
        },
        {
            id: 3,
            title: 'Shadcn Timeline',
            description: 'Shadcn timeline component. Open Source.',
            time: 'November, 2024',
        },
    ];


  return (


      <MobileLayout>
          <div
            className={'p-4'}
          ><Timeline className="mt-8">
              {timelineData.map((item) => (
                  <TimelineItem key={item.id}>
                      <TimelineHeader>
                          <TimelineTime>{item.time}</TimelineTime>
                          <TimelineTitle>{item.title}</TimelineTitle>
                      </TimelineHeader>
                      {item.description && (
                          <TimelineDescription>{item.description}</TimelineDescription>
                      )}
                  </TimelineItem>
              ))}
          </Timeline></div>
      </MobileLayout>
  );
}
