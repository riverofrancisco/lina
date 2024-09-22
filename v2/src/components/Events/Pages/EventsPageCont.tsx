import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EventCard } from "../Cards/EventCard.tsx";
import { Timer } from "../Timer.jsx";
import "./EventsPageCont.css";

const events = [
  {
    title: "Lina en The Monkeys",
    date: "2024-08-16T22:00:00-03:00",
    picture: "/media/pictures/Toma1.jpg",
    locationLink: "https://maps.app.goo.gl/Ggf23CQXggGcVF5g6",
    locationName: "The Monkeys, CABA",
    country: "AR",
    tickets: "/404",
  },
  {
    title: "Lina en Moscú",
    date: "2024-08-25T20:00:00-03:00",
    picture: "/media/pictures/Toma1.jpg",
    locationLink: "https://maps.app.goo.gl/gFpda1e5SNspsgFx9",
    locationName: "Moscú Espacio Cultural, CABA",
    country: "AR",
    tickets: "/404",
  },
  {
    title: "Festival UNTREF",
    date: "2024-09-21T20:45:00-03:00",
    picture: "/media/pictures/Toma1.jpg",
    locationLink: "https://maps.app.goo.gl/D1cnW5fRD7s6PatG7",
    locationName: "UNTREF, Buenos Aires",
    country: "AR",
    tickets: "/404",
  },
  {
    title: "Atelier de Arte",
    date: "2024-11-29T21:00:00-03:00",
    picture: "/media/pictures/Toma1.jpg",
    locationLink: "https://maps.app.goo.gl/1QQtqch5PXttAe8WA",
    locationName: "El Atelier, CABA",
    country: "AR",
    tickets: "",
  },
  {
    title: "Que nos Queda",
    date: "2024-09-28T22:00:00-03:00",
    picture: "/media/pictures/qnq.jpg",
    locationLink: "https://maps.app.goo.gl/Nrsws1q4F2sUZe769",
    locationName: "Deckers Beer, Sarandí, Buenos Aires",
    country: "AR",
    tickets: "",
  },
  {
    title: "Lina en Conjura",
    date: "2024-09-29T22:00:00-03:00",
    picture: "/media/pictures/Toma1.jpg",
    locationLink: "https://maps.app.goo.gl/cuqjopyemU3VcKXEA",
    locationName: "Club Conjura, CABA",
    country: "AR",
    tickets: "https://www.passline.com/eventos/voidpalooza-en-club-conjura",
  },
];

interface IEventsPage {
  inHome: boolean;
  eventsData: any[];
}

export const EventsPageContent = ({ inHome, eventsData }: IEventsPage) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  //logica para el evento más próximo
  const [targetDate, setTargetDate] = useState<string | null>(null);
  const [nextEventIndex, setNextEventIndex] = useState<number | null>(0);
  const currentDate = new Date();

  const sortedEvents = eventsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  

  useEffect(() => {
    const nextEventIndex = sortedEvents.findIndex(
      (event) => new Date(event.date) < currentDate,
    );

    if (nextEventIndex !== -1) {
      setTargetDate(sortedEvents[nextEventIndex - 1].date);
      setNextEventIndex(nextEventIndex - 1  );
    }

    if (emblaApi && nextEventIndex !== null) {
      emblaApi.scrollTo(nextEventIndex -1); // Desplazar a la tarjeta correcta
    }
  }, [sortedEvents, currentDate, emblaApi]);




  return (
    <div>
      <Timer nextDate={targetDate} />
      {inHome ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {sortedEvents &&
                sortedEvents.map((evt) => (
                  <div key={`${evt.date}`} className="embla__slide">
                    <EventCard
                      title={evt.title}
                      date={evt.date}
                      picture={evt.picture}
                      locationLink={evt.locationLink}
                      locationName={evt.locationName}
                      tickets={evt.tickets}
                      country={evt.country}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="controls__container">
            <button className="embla__prev control" onClick={scrollPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button className="embla__next control" onClick={scrollNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-10 md:mx-32 grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
          {sortedEvents &&
            sortedEvents.map((evt) => (
              <EventCard
                key={`${evt.date}`}
                title={evt.title}
                date={evt.date}
                picture={evt.picture}
                locationLink={evt.locationLink}
                locationName={evt.locationName}
                country={evt.country}
                tickets={evt.tickets}
              />
            ))}
        </div>
      )}
    </div>
  );
};
