import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export interface PictureI {
  id?: number;
  created_at?: string;
  url: string;
  deleted?: number;
  index: number;
}

export interface PicturesAPII {
  dataType: string;
  data: PictureI[];
}

const responseData: PicturesAPII = { dataType: "Pictures", data: [] };

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: pictures, error } = await supabase
      .from("pictures")
      .select("url,index,component")
      .eq("deleted", 0);

    if (error) {
      console.error("Supabase response error");
      console.log(error);
    }

    if (pictures) {
      responseData.data = pictures.sort(
        (a: PictureI, b: PictureI) => a.index - b.index
      );

      return new NextResponse(JSON.stringify(responseData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new NextResponse(JSON.stringify(responseData), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return new NextResponse(JSON.stringify(responseData), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
