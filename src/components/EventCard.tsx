import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import type { Event } from '@/data/events.ts'
import { useLanguage } from '../hooks/useLanguage';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const { language } = useLanguage();
    const currentLang = language === 'ko' ? 'ko' : 'en';

    return (
        <Card className="flex flex-col md:flex-row overflow-hidden mb-4 w-full max-w-md md:max-w-2xl mx-auto">
            <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img src={event.image} alt={event.title[currentLang]} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col">
                <CardHeader className="pb-2">
                    <CardTitle>{event.title[currentLang]}</CardTitle>
                    <CardDescription className="line-clamp-3">{event.description[currentLang]}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow text-sm">
                    <p className="text-gray-600 mb-1"><strong className="font-semibold">장소:</strong> {event.location[currentLang]}</p>
                    <p className="text-gray-600"><strong className="font-semibold">시간:</strong> {event.time}</p>
                </CardContent>
                <CardFooter className="pt-0">
                    <Button asChild>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                            {currentLang === 'ko' ? '자세히 보기' : 'Learn More'}
                        </a>
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
};

export default EventCard;