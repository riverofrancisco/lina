import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EventsContLoader.css';
import { TimerLoader } from './TimerLoader';
import { EventCardSkeleton } from '../ui/Cards/EventCardSkeleton';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
      <TimerLoader inHome={inHome} />
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
             <IconButton className="embla__prev control" onClick={scrollPrev}>
               <ArrowLeftIcon />       
            </IconButton>
            <IconButton className="embla__next control" onClick={scrollNext}>
              <ArrowRightIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="events-grid-loader">
          {eventsData.map((evt, index) => (
            <EventCardSkeleton key={`${index}-EventCardSkeleton-NotInHome`} />
          ))}
        </div>
      )}
    </div>
  );
};
