import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EventsContLoader.css';
import { TimerLoader } from './TimerLoader';
import { EventCardSkeleton } from '../ui/Cards/EventCardSkeleton';

interface IEventsPage {
  inHome: boolean;
}

export const EventsContainerLoader = ({ inHome }: IEventsPage) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const eventsData = ['A', 'B', 'C', 'D', 'E', 'F'];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <TimerLoader />
      {inHome ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {eventsData &&
                eventsData.map((evt, index) => (
                  <div
                    key={`${index}-EventCardSkeleton-InHome`}
                    className="embla__slide"
                  >
                    <EventCardSkeleton />
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
          {eventsData.map((evt, index) => (
            <EventCardSkeleton key={`${index}-EventCardSkeleton-NotInHome`} />
          ))}
        </div>
      )}
    </div>
  );
};
