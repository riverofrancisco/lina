export interface EventCardI {
  title: string;
  date: Date;
  picture: string;
  locationLink: string;
  locationName: string;
  description: string;
}

export const EventCard = ({
  title,
  date,
  picture,
  locationLink,
  locationName,
  description,
}: EventCardI) => {
  const eventDate = new Date(date);
  const formattedDate = eventDate.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-lg overflow-hidden">
      <img src={picture} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{formattedDate}</p>
        <a
          href={locationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mb-2 block"
        >
          {locationName}
        </a>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
