import { YouTubeVideo } from "@/types/youtube";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: YouTubeVideo[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-12 max-w-7xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}