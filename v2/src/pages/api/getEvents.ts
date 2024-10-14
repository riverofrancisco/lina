// src/pages/api/getEvents.ts
import supabase from "../../../public/services/database.js";
import type { EventI } from "../../utils/interfaces/interfaces";
import type { APIRoute } from "astro";

let data: EventI[] = [];

const PASS = import.meta.env.VITE_API_PASS

export const GET: APIRoute = async () => {
  try {

    let { data: events, error } = await supabase
      .from("events")
      .select("title,date,picture,country,locationLink,locationName,tickets")
      .eq("deleted", 0);
    data = events.sort(
      (a: EventI, b: EventI) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return new Response(JSON.stringify(data), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
