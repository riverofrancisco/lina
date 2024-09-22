import { Picture } from "astro:assets";
import supabase from "./database";
import type { EventCardI } from "../../src/components/Events/Cards/EventCard";

export const createEvent = async (event: EventCardI) => {
  const { data, error } = await supabase
    .from("events")
    .insert([
      {
        title: event.title,
        date: event.date,
        picture: event.date,
        locationLink: event.locationLink,
        locationName: event.locationName,
        country: event.country,
        tickets: event.tickets,
      },
    ])
    .select();

  if (error) {
    console.log("Error creating event: ", error);
  } else {
    console.log("Event created succesfully", data);
  }
};
