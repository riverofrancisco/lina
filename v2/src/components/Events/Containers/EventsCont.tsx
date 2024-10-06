import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EventCard } from "../Cards/EventCard.tsx";
import { Timer } from "../Timer.jsx";
import type { EventI } from "../../../utils/interfaces/interfaces.ts";
import "./EventsCont.css";
import { TimerLoader } from "../TimerLoader.jsx";

interface IEventsPage {
  inHome: boolean;
  eventsData: EventI[];
}

export const EventsContainer = ({ inHome, eventsData }: IEventsPage) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [targetDate, setTargetDate] = useState<string | null>(null);
  const [nextEventIndex, setNextEventIndex] = useState<number | null>(0);
  const currentDate = new Date();

  if (!inHome) {
    useEffect(() => {
      let sorted = eventsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      const nextEventIndex = sorted.findIndex(
        (event) => new Date(event.date) < currentDate,
      );
      if (nextEventIndex !== -1) {
        setTargetDate(eventsData[nextEventIndex - 1].date);
        setNextEventIndex(nextEventIndex - 1);
      }
    }, [targetDate]);
  } else {
    useEffect(() => {
      const nextEventIndex = eventsData.findIndex(
        (event) => new Date(event.date) > currentDate,
      );
      if (nextEventIndex !== -1) {
        setTargetDate(eventsData[nextEventIndex].date);
        setNextEventIndex(nextEventIndex);
      }

      if (emblaApi && nextEventIndex !== null) {
        emblaApi.scrollTo(nextEventIndex);
      }
    }, [emblaApi, targetDate]);
  }

  return (
    <div>
      <Timer nextDate={targetDate} />
      {inHome ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {eventsData &&
                eventsData.map((evt) => (
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
        <div className="mx-4 md:mx-32 grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
          {eventsData.map((evt) => (
            <EventCard
              key={`${evt.date}2`}
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
