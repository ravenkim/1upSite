import React from 'react';
import { Tabs as RawTabs, TabsList as RawTabsList, TabsTrigger as RawTabsTrigger, TabsContent as RawTabsContent } from 'src/shared/lib/shadcn/components/ui/tabs.tsx';

interface TimelineItem {
  year: number;
  month: number;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Tabs = RawTabs as any;
const TabsList = RawTabsList as any;
const TabsTrigger = RawTabsTrigger as any;
const TabsContent = RawTabsContent as any;

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="w-full px-4 py-2">
      <Tabs defaultValue={String(0)} className="w-full">
        <TabsList className="w-full flex justify-between bg-transparent p-0">
          {items.map((item, idx) => (
            <TabsTrigger
              key={idx}
              value={String(idx)}
              className="flex flex-col items-center min-w-24 px-2 py-0 bg-transparent border-none shadow-none"
              style={{ background: 'none' }}
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full mb-1" />
              <span className="text-xs text-blue-700 font-semibold">{item.year}.{item.month}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((item, idx) => (
          <TabsContent key={idx} value={String(idx)} className="w-full flex justify-center mt-4">
            <div className="text-base text-gray-800 text-center whitespace-pre-line min-h-10">
              {item.description}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Timeline; 