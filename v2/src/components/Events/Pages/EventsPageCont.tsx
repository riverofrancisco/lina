import type { EventCardI } from "../Cards/EventCard.tsx";
import { EventCard } from "../Cards/EventCard.tsx";
import { Timer } from "../Timer.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsPageCont.css";

const events = [
  {
    title: "Festival Internacional de Música",
    date: "2024-11-15T19:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/ABcDef1234",
    locationName: "Parque de la Música, Madrid",
    description:
      "Lina Rivero será la artista principal en el Festival Internacional de Música en Madrid, una noche que promete ser inolvidable.",
    tickets: "",
  },
  {
    title: "Concierto en la Playa",
    date: "2024-07-20T18:30:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/GHiJkl4567",
    locationName: "Playa Grande, Mar del Plata",
    description:
      "Disfruta de un atardecer increíble con la música de Lina Rivero en la hermosa Playa Grande. ¡No te lo pierdas!",
    tickets: "",
  },
  {
    title: "Gira Sudamericana",
    date: "2024-09-10T20:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/MNoPqr7890",
    locationName: "Estadio Nacional, Santiago",
    description:
      "Lina Rivero llega a Santiago de Chile como parte de su Gira Sudamericana. ¡Asegura tu entrada y sé parte de este evento histórico!",
    tickets: "",
  },
  {
    title: "El gato danzarín",
    date: "2024-11-15T19:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/ABcDef1234",
    locationName: "Parque de la Música, Madrid",
    description:
      "Lina Rivero será la artista principal en el Festival Internacional de Música en Madrid, una noche que promete ser inolvidable.",
    tickets: "",
  },
  {
    title: "Vuela el Pez",
    date: "2024-07-20T18:30:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/GHiJkl4567",
    locationName: "Playa Grande, Mar del Plata",
    description:
      "Disfruta de un atardecer increíble con la música de Lina Rivero en la hermosa Playa Grande. ¡No te lo pierdas!",
    tickets: "",
  },
  {
    title: "The Roxy Bar",
    date: "2024-09-10T20:00:00",
    picture: "/data/pictures/Toma1.jpg",
    locationLink: "https://goo.gl/maps/MNoPqr7890",
    locationName: "Estadio Nacional, Santiago",
    description:
      "Lina Rivero llega a Santiago de Chile como parte de su Gira Sudamericana. ¡Asegura tu entrada y sé parte de este evento histórico!",
    tickets: "",
  },
];

interface EventsPage {
  inHome: boolean;
}

export const EventsPageContent = ({ inHome }: EventsPage) => {
  let allEvents: EventCardI[] = [];

  events.forEach((ev) => {
    allEvents.push(ev);
  });

  const targetDate = "2024-12-31T23:59:59";

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Timer nextDate={targetDate} />
      {inHome ? (
        <div className="slider-container">
          <Slider {...settings}>
            {allEvents.map((evt) => (
              <EventCard
                key={`${evt.date}`}
                title={evt.title}
                date={evt.date}
                picture={evt.picture}
                locationLink={evt.locationLink}
                locationName={evt.locationName}
                description={evt.description}
                tickets={evt.tickets}
              />
            ))}
          </Slider>
        </div>
      ) : (
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
              tickets={evt.tickets}
            />
          ))}
        </div>
      )}
    </div>
  );
};
