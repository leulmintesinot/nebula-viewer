import { NextRequest, NextResponse } from "next/server";
import { searchYouTube } from "@/services/youtube";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing search query." },
      { status: 400 }
    );
  }

  try {
    const videos = await searchYouTube(query);

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch videos." },
      { status: 500 }
    );
  }
}