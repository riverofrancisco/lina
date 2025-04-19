import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export interface SongI {
  id?: number;
  created_at?: string;
  deleted?: number;
  title: string;
  duration: bigint;
}

export interface SongsAPII {
  dataType: string;
  data: SongI[];
}

const responseData: SongsAPII = { dataType: "Songs", data: [] };

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: songs, error } = await supabase
      .from("songs")
      .select("title, author, duration")
      .eq("deleted", 0);

    if (error) {
      console.error("Supabase response error");
      console.log(error);
    }

    if (songs) {
      responseData.data = songs.sort((a: SongI, b: SongI) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
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
    console.error("Error fetching songs:", error);
    return new NextResponse(JSON.stringify(responseData), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { title, author, duration } = await request.json();
    console.log(title);
    console.log(author);
    console.log(duration);
    console.log(request);
    if (!title || !author || !duration) {
      return new NextResponse(
        JSON.stringify({
          Error: "Incorrect data provided.",
        })
      );
    }
    const { data, error } = await supabase
      .from("songs")
      .insert([{ title: title, author: author, duration: duration }])
      .select();

    if (error) {
      console.error("Supabase response error");
      console.log(error);
    }

    if (data) {
      console.log(data);
      return new NextResponse(JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error creating song:", error);
    return new NextResponse(JSON.stringify(responseData), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
