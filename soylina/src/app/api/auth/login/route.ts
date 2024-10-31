import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

const responseData = { dataType: "Login", data: [] };

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { email, password } = await request.json();
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({
          Error: "Incorrect data provided.",
        })
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Supabase response error");
      console.log(error);
    }

    console.log(data);

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    console.error("Error logging in:", error);
    return new NextResponse(JSON.stringify(responseData), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
