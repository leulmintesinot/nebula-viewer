import { YouTubeVideo } from "@/types/youtube";

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export async function searchYouTube(query: string): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error("Missing YouTube API key.");
  }

  const url = new URL(BASE_URL);

  url.searchParams.set("part", "snippet");
  url.searchParams.set("maxResults", "25");
  url.searchParams.set("q", query);
  url.searchParams.set("type", "video");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch YouTube videos.");
  }

  const data = await response.json();

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    channelTitle: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt,
  }));
}