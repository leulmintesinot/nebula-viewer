import { YouTubeVideo } from "@/types/youtube";

interface VideoCardProps {
  video: YouTubeVideo;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:border-blue-500">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="aspect-video w-full object-cover"
      />

      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-white">
          {video.title}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {video.channelTitle}
        </p>
      </div>
    </article>
  );
}