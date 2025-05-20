import { GalleryContainer } from '@/components/Gallery/GalleryContainer';
import { GalleryContainerLoader } from '@/components/Gallery/GalleryContainerLoader';

interface EventsPageI {
  inHome: boolean;
}

const GalleryPage = async ({ inHome = false }: EventsPageI) => {
  let picturesData: any[] = [];
  try {
    const response = await fetch(`http://localhost:3000/api/pictures`);
    if (!response.ok) {
      throw new Error('Error fetching events');
    }
    const data = await response.json();
    picturesData = data.data;
  } catch (error) {
    console.error(error);
  }

  if (!picturesData || picturesData.length === 0) {
    return <GalleryContainerLoader inHome={inHome} />;
  } else {
    return <GalleryContainer inHome={inHome} picturesData={picturesData} />;
  }
};

export default GalleryPage;
