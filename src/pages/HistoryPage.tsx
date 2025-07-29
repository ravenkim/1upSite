import MobileLayout from '@/layouts/MobileLayout.tsx'
import {
    Timeline,
    TimelineDescription,
    TimelineHeader,
    TimelineItem,
    TimelineTime,
    TimelineTitle,
} from '@/components/ui/timeline.tsx'
import { historyEvents, type HistoryEvent } from '../data/history'
import { useLanguage } from '@/hooks/useLanguage'

export default function HistoryPage() {
    const { language } = useLanguage();

    return (
        <MobileLayout>
            <div className={'p-4'}>
                <Timeline className="mt-8">
                    {historyEvents.map((item: HistoryEvent) => (
                        <TimelineItem key={item.id}>
                            <TimelineHeader>
                                <TimelineTime>{item.year}</TimelineTime>
                                <TimelineTitle>{item.title[language as keyof typeof item.title]}</TimelineTitle>
                            </TimelineHeader>
                            {item.description && (
                                <TimelineDescription>{item.description[language as keyof typeof item.description]}</TimelineDescription>
                            )}
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </MobileLayout>
    );
}
