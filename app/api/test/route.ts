// app/api/test/route.ts

import { query } from "@/lib/db";
import { NextResponse } from "next/server";

// 1. Define the type of the row you expect
interface NowResponse {
  now: Date;
}

export async function GET() {
  try {
    // 2. Pass the type <NowResponse> to your query function
    const result = await query<NowResponse>("SELECT NOW()");

    // 3. TypeScript now knows the exact shape of result.rows[0]
    const time = result.rows[0].now;

    return NextResponse.json({ time: time });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        message: "Error connecting to database",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
