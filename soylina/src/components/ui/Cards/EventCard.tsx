'use client';
import { useEffect, useState } from 'react';
import './EventCard.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

export interface EventCardI {
  title: string;
  date: string;
  picture: string;
  locationLink: string;
  locationName: string;
  country: string;
  tickets: string;
}

export const EventCard = ({
  title,
  date,
  picture,
  locationLink,
  locationName,
  country,
  tickets,
}: EventCardI) => {
  const eventDate = new Date(date);
  const currentDate = new Date();

  const [isFree, setIsFree] = useState(false);
  const [ticketsText, setTicketsText] = useState('ENTRADAS');
  const [period, setPeriod] = useState(3);

  const formattedDate = eventDate.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = eventDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const isPastEvent = eventDate < currentDate;

  const isToday =
    eventDate.getDate() === currentDate.getDate() &&
    eventDate.getMonth() === currentDate.getMonth() &&
    eventDate.getFullYear() === currentDate.getFullYear();

  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
  const isThisWeek =
    eventDate > currentDate &&
    eventDate.getTime() - currentDate.getTime() < oneWeekInMs;

  useEffect(() => {
    if (tickets.indexOf('/') === -1) {
      setIsFree(true);
      setTicketsText(tickets);
    }
    if (isPastEvent) {
      setPeriod(0);
    } else if (isToday) {
      setPeriod(1);
    } else if (isThisWeek) {
      setPeriod(2);
    }
  }, []);

  return (
    <div
      className={`event-card${period === 0 ? ' past' : ''}${
        period === 1 ? ' today' : ''
      }${period === 2 ? ' week' : ''}`}
    >
      {period === 0 && (
        <div className="event-card-label past">EVENTO TERMINADO</div>
      )}
      {period === 2 && <div className="event-card-label week">ESTA SEMANA</div>}
      {period === 1 && <div className="event-card-label today">HOY</div>}
      <img
        src={picture}
        alt={title}
        loading="lazy"
        className="event-card-img"
      />
      <div className="event-card-date-row">
        <CalendarMonthOutlinedIcon />
        <div className="event-card-date-info">
          <p className="event-card-date-text">{formattedDate}</p>
          <p className="event-card-date-time">{formattedTime}hs</p>
        </div>
        </div>
        <div className="event-card-content">
          <h2 className="event-card-title">{title}</h2>

          <div className="event-card-location-row">
            <a
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card-location-link"
            >
              <LocationOnIcon />
              <p>{locationName}</p>
            </a>
            <a
              href={!isFree ? tickets : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card-tickets-link"
            >
              <button
                className={`event-card-btn ${isFree ? 'outlined' : 'filled'}`}
                disabled={isFree}
              >
                <ConfirmationNumberOutlinedIcon />
                {ticketsText}
              </button>
            </a>
          </div>
        
      </div>
    </div>
  );
};
