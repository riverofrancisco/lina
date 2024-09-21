import { useEffect, useState } from "react";

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
  const [ticketsText, setTicketsText] = useState("ENTRADAS");

  const formattedDate = eventDate.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = eventDate.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const isPastEvent = eventDate < currentDate;

  const isToday =
    eventDate.getDate() === currentDate.getDate() &&
    eventDate.getMonth() === currentDate.getMonth() &&
    eventDate.getFullYear() === currentDate.getFullYear();

  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // Una semana en milisegundos
  const isThisWeek =
    eventDate > currentDate &&
    eventDate.getTime() - currentDate.getTime() < oneWeekInMs;

  useEffect(() => {
    if (tickets.indexOf("/") === -1) {
      setIsFree(true);
      setTicketsText(tickets);
    }
  });

  return (
    <div
      className={`relative bg-gradient-to-r ${
        isPastEvent ? "from-gray-300 to-gray-500" : "from-gray-100 to-gray-300"
      } ${isToday ? "border-2 border-green-300" : "border-transparent"} ${isThisWeek ? "border-2 border-orange-300" : "border-transparent"} shadow-lg rounded-lg overflow-hidden`}
    >
      {isPastEvent && (
        <div className="absolute top-0 left-0 right-0 bg-red-800 opacity-90 text-white text-center py-1 font-bold">
          Evento terminado
        </div>
      )}
      {isThisWeek && (
        <div className="absolute top-0 left-0 right-0 bg-orange-400 opacity-90 text-white text-center py-1 font-bold">
          Esta Semana
        </div>
      )}
      {isToday && (
        <div className="absolute top-0 left-0 right-0 bg-green-400 opacity-90 text-white text-center py-1 font-bold">
          Hoy
        </div>
      )}
      <img
        src={picture}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover lazyload"
        style={{
          width: "100%", // Responsive width
          aspectRatio: 16 / 9, // Maintain aspect ratio
          objectFit: "cover", // Ensures all images have the same aspect ratio
        }}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex items-start sm:items-center text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 mr-1 icon icon-tabler icons-tabler-outline icon-tabler-calendar-month"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M7 14h.013" />
            <path d="M10.01 14h.005" />
            <path d="M13.01 14h.005" />
            <path d="M16.015 14h.005" />
            <path d="M13.015 17h.005" />
            <path d="M7.01 17h.005" />
            <path d="M10.01 17h.005" />
          </svg>
          <div className="flex flex-col sm:flex-row">
            <p className="text-sm">{formattedDate}</p>
            <p className="font-bold sm:ml-1 text-sm"> {formattedTime}hs</p>
          </div>
        </div>
        <div className="flex justify-between">
          <a
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold mb-2"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
            <p className="text-sm">{locationName}</p>
          </a>

          <a
            href={!isFree ? tickets : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end mb-2"
          >
            <button
              className={`flex items-center justify-between ${isFree ? 'text-black outlined border-2 border-black p-2 text-sm bg-white rounded' : 'text-gray-100 bg-gray-900 hover:shadow p-2 rounded transition-all filled hover:bg-white hover:text-gray-900'}`}
              disabled={isFree}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" w-5 h-5 mr-1 icon icon-tabler icons-tabler-outline icon-tabler-ticket"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5l0 2" />
                <path d="M15 11l0 2" />
                <path d="M15 17l0 2" />
                <path d="M5 5h14a2 2 0 0  1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
              {ticketsText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
