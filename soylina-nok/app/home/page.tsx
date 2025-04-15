import EventsPage from '@/components/events/EventsPage';
import GalleryPage from '@/components/gallery/GalleryPage';

export default function HomePage() {
  return <>
  <EventsPage inHome={true} />
  <GalleryPage inHome={true} />
  </>
}
