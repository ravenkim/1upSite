import { useLanguage } from '../hooks/useLanguage'
import MobileLayout from '@/layouts/MobileLayout.tsx'
import { events } from '../data/events';
import EventCard from '../components/EventCard';

export default function EventPage() {
    const { t } = useLanguage()
    return (
        <MobileLayout>
            <div className="p-4">
                <h1 className="text-3xl font-bold text-center mb-6">{t('welcome.event')}</h1>
                <div className="flex flex-col items-center">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </MobileLayout>
    )
}
