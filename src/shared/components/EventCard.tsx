import React from 'react';
import {
  Card,
  CardContent,
  CardTitle,
} from 'src/shared/lib/shadcn/components/ui/card';

interface EventCardProps {
  image?: string;
  title: string;
  time: string;
  location: string;
}

const DEFAULT_IMAGE = 'https://via.placeholder.com/300?text=No+Image';

const EventCard: React.FC<EventCardProps> = ({ image, title, time, location }) => {
  return (
    <Card className="flex flex-row w-full h-[160px] p-0 overflow-hidden bg-card text-card-foreground border border-card shadow-sm rounded-xl mb-8">
      <div className="w-[160px] h-[160px] bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={image || DEFAULT_IMAGE}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>
      <CardContent className="flex flex-col justify-center flex-1 py-0 pl-6 pr-0">
        <CardTitle className="mb-3 text-lg font-bold">{title}</CardTitle>
        <div className="text-muted-foreground text-[15px] mb-1.5">🕒 {time}</div>
        <div className="text-muted-foreground text-[15px]">📍 {location}</div>
      </CardContent>
    </Card>
  );
};

export default EventCard; 