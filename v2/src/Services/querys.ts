import supabase from "./database";

export const getEvents = async () => {
  let { data: events, error } = await supabase.from("events").select("*");
  console.log(events);
};

