import React from 'react'
import SSmobile from 'src/shared/layouts/SSmobile.tsx'
import EventCard from 'src/shared/components/EventCard'

const EventPage = () => {
  return (
    <SSmobile>
      <div
          className={'w-full p-3 flex flex-col'}
          style={{ padding: 20 }}>


        <EventCard
          // image={}
          title="1UP 콘서트"
          time="2024-07-01 18:00"
          location="서울 홍대 무브홀"
        />
        <EventCard
            // image={}
            title="1UP 콘서트"
            time="2024-07-01 18:00"
            location="서울 홍대 무브홀"
        />
        <EventCard
            // image={}
            title="1UP 콘서트"
            time="2024-07-01 18:00"
            location="서울 홍대 무브홀"
        />
      </div>
    </SSmobile>
  )
}

export default EventPage 