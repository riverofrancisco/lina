'use client';

import { useEffect, useState } from 'react';
import { EventsContainer } from './EventsContainer';
import { EventsContainerLoader } from './EventsContainerLoader';

interface EventsPageI {
  inHome: boolean;
}

const EventsPage = ({ inHome }: EventsPageI) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch('/api/events');
        console.log('API Called!');
        if (!response.ok) {
          throw new Error('Error fetching events');
        }
        const eventsData = await response.json();
		console.log(eventsData)
        setEventsData(eventsData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventsData();
  }, []);

  if (eventsData.length == 0) {
    return <EventsContainerLoader inHome={inHome} />;
  } else {
    return <EventsContainer inHome={inHome} eventsData={eventsData} />;
  }
};

export default EventsPage;
