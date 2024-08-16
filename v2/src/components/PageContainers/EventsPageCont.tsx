import type { EventCardI } from "../Cards/EventCard";
import { EventCard } from "../Cards/EventCard.tsx";
import { Timer } from "../Timer";

const events = [
  {
    title: "Festival Internacional de Música",
    date: "2024-11-15T19:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/ABcDef1234",
    locationName: "Parque de la Música, Madrid",
    description:
      "Lina Rivero será la artista principal en el Festival Internacional de Música en Madrid, una noche que promete ser inolvidable.",
  },
  {
    title: "Concierto en la Playa",
    date: "2024-07-20T18:30:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/GHiJkl4567",
    locationName: "Playa Grande, Mar del Plata",
    description:
      "Disfruta de un atardecer increíble con la música de Lina Rivero en la hermosa Playa Grande. ¡No te lo pierdas!",
  },
  {
    title: "Gira Sudamericana",
    date: "2024-09-10T20:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/MNoPqr7890",
    locationName: "Estadio Nacional, Santiago",
    description:
      "Lina Rivero llega a Santiago de Chile como parte de su Gira Sudamericana. ¡Asegura tu entrada y sé parte de este evento histórico!",
  },
];

export const EventsPageContent = () => {
  let allEvents: EventCardI[] = [];

  events.forEach((ev) => {
    allEvents.push(ev);
  });

  const targetDate = "2024-12-31T23:59:59";

  return (
    <div>
      <Timer nextDate={targetDate} />
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
        {allEvents.map((evt) => (
          <EventCard
            key={`${evt.date}`}
            title={evt.title}
            date={evt.date}
            picture={evt.picture}
            locationLink={evt.locationLink}
            locationName={evt.locationName}
            description={evt.description}
          />
        ))}
      </div>
    </div>
  );
};
