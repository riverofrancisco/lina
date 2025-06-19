'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EventCard } from '../ui/Cards/EventCard';
import { Timer } from './Timer';
import { TimerLoader } from './TimerLoader';
import { EventI } from '../../utils/interfaces/interfaces.js';

import './EventsContainer.css';

interface IEventsPage {
  inHome: boolean;
  eventsData: EventI[];
}

export const EventsContainer = ({ inHome, eventsData = [] }: IEventsPage) => {
  const [targetDate, setTargetDate] = useState<string | null>(null);
  const [nextEventIndex, setNextEventIndex] = useState<number>(0);
  const currentDate = new Date();
  const [sortedEvents, setSortedEvents] = useState<EventI[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const sortEvents = async (AZ: boolean) => {
    let sorted = eventsData;
    if (AZ) {
      const AZ = sorted
        .filter((event) => event.date)
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      //console.log(AZ[0]);
      setSortedEvents(AZ);
    } else {
      const ZA = sorted
        .filter((event) => event.date)
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      //console.log(ZA[0]);
      setSortedEvents(ZA);
    }
  };

  if (!inHome) {
    useEffect(() => {
      sortEvents(inHome).then(() => {
        const nextIndex = sortedEvents.findIndex(
          (event) => new Date(event.date) < currentDate
        );

        if (nextIndex === -1 || nextIndex === 0) {
          setTargetDate('No-events-ahead');
        } else {
          setNextEventIndex(nextIndex);
          setTargetDate(sortedEvents[nextIndex - 1].date);
        }
      });
    }, [targetDate]);
  } else {
    useEffect(() => {
      sortEvents(inHome).then(() => {
        const nextIndex = sortedEvents.findIndex(
          (event) => new Date(event.date) > currentDate
        );
        if (nextIndex === -1) {
          setTargetDate('No-events-ahead');
        } else {
          setTargetDate(eventsData[nextIndex].date);
          setNextEventIndex(nextIndex);
        }

        if (emblaApi && nextIndex !== -1) {
          emblaApi.scrollTo(nextEventIndex);
        }
      });
    }, [inHome, emblaApi, targetDate]);
  }

  return (
    <>
      {targetDate === 'No-events-ahead' ? (
        <TimerLoader />
      ) : (
        <Timer nextDate={targetDate} />
      )}

      {inHome ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {eventsData &&
                sortedEvents.map((evt, index) => (
                  <div key={`${index}inHome`} className="embla__slide">
                    <EventCard
                      key={`${index}EventCard-inHomeCard`}
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
        <div className="events-grid">
          {sortedEvents.map((evt, index) => (
            <EventCard
              key={`${index}EventCard-NotInHome`}
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
    </>
  );
};
