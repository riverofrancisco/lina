import React from 'react';
import EventsPage from '../../components/Events/EventsPage';
import { HomeCarousel } from '../../components/Carousel/Carousel';

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <EventsPage inHome={true} />
    </>
  );
}
