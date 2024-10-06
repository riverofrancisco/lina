import type { EventI } from "../../src/utils/interfaces/interfaces";
import supabase from "./database";

/* export const getEvents = async (): Promise<EventI[]> => {
  console.log("getting events...");
  let { data: events, error } = await supabase
    .from("events")
    .select(
      "title,date,picture,country,locationLink,locationName,tickets,deleted",
    );
  if (error) {
    console.error("Error fetching pictures:", error);
    let emptyData: EventI[] = [];
    return emptyData;
  }
  let data: EventI[] = [];
  data = events.filter((event: EventI) => event.deleted === 0);
  data.sort(
    (a: EventI, b: EventI) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  console.log(data);
  return data;
}; */

export const getGalleryPictures = async () => {
  console.log("getting pictures...");
  let { data: pictures, error } = await supabase.from("pictures").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    return null;
  }

  pictures.sort((a: any, b: any) => a.id - b.id);
  return pictures;
};
