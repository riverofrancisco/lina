import supabase from "./database";

export const getEvents = async () => {
  console.log("getting events...");
  let { data: events, error } = await supabase.from("events").select("*");
  if (error) {
    console.error("Error fetching pictures:", error);
    return null;
  }
  events.sort((a:any, b:any)=> new Date(a.date).getTime() - new Date(b.date).getTime())
  //console.log(events)
  return events;
};

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
