import { YouTubeVideo } from "@/types/youtube";

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  const response = await fetch(
    `/api/youtube/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch videos.");
  }

  return response.json();
}