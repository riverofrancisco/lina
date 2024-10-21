import type { APIRoute } from "astro";
import supabase from "../../../public/services/database";
import type { PictureI } from "../../utils/interfaces/interfaces";

let data: PictureI[] = [];

export const GET: APIRoute = async () => {
  try {
    console.log("getting pictures...");
    let { data: pictures, error } = await supabase
      .from("pictures")
      .select("url,index,component")
      .eq("deleted", 0);
    data = pictures.sort((a: PictureI, b: PictureI) => a.index - b.index);
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
