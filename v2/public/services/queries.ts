import supabase from "./database";

export const getEvents = async () => {
  console.log("geting events");
  let { data: events, error } = await supabase.from("events").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    return null;
  }
  console.log(events);
  return events;
};

export const getGalleryPictures = async () => {
  console.log("geting pictures");
  let { data: pictures, error } = await supabase.from("pictures").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    return null;
  }
  console.log(pictures);
  pictures.sort((a: any, b: any) => a.id - b.id);
  return pictures;
};
