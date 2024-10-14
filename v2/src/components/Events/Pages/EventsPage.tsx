import { useEffect, useState } from "react";
import { EventsContainer } from "../Containers/EventsCont";
import { EventsContainerLoader } from "../Containers/EventsContLoader";

interface EventsPageI {
  inHome: boolean;
}

const EventsPage = ({ inHome }: EventsPageI) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch("/api/getEvents");
        if (!response.ok) {
          throw new Error("Error fetching events");
        }
        const eventsData = await response.json();
        setEventsData(eventsData);
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
