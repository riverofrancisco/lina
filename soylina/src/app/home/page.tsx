import React from 'react';
import EventsPage from '../../components/Events/EventsPage';

export default function HomePage() {
  return (
    <div>
      <EventsPage inHome={true} />
    </div>
  );
}
