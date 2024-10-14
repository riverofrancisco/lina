import { useEffect, useState } from "react";
import { GalleryContainer } from "../Containers/GalleryContainer";
import { GalleryContainerLoader } from "../Containers/GalleryContainerLoader";

interface EventsPageI {
  inHome: boolean;
}

const GalleryPage = ({ inHome }: EventsPageI) => {
  const [picturesData, setPicturesData] = useState([]);

  useEffect(() => {
    const fetchPicturesData = async () => {
      try {
        const response = await fetch("/api/getPictures");
        if (!response.ok) {
          throw new Error("Error fetching events");
        }
        const picturesData = await response.json();
        setPicturesData(picturesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPicturesData();
  }, []);

  if (picturesData.length == 0) {
    return <GalleryContainerLoader inHome={inHome} />;
  } else {
    return <GalleryContainer inHome={inHome} picturesData={picturesData} />;
  }
};

export default GalleryPage;
