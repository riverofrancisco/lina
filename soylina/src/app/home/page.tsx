import React from 'react';
import EventsPage from '../../components/Events/EventsPage';
import GalleryPage from '../../components/Gallery/GalleryPage';
import { HomeCarousel } from '../../components/Carousel/Carousel';

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <EventsPage inHome={true} />
      <GalleryPage inHome={true} />
    </>
  );
}
