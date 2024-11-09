import { Card, CardContent } from "@/components/ui/card";
import type { Media } from "@/query/media.query";
import { formatDistance } from "date-fns";
import YouTubePlayer from "./youtube-player";

interface VideoCardProps {
	video: Media;
}

export function VideoCard({ video }: VideoCardProps) {
	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="relative aspect-video">
				<YouTubePlayer videoId={video.url} />
			</div>
			<CardContent className="p-6">
				<h3 className="text-l font-semibold mb-2 line-clamp-2 h-[3.2rem] text-wrap overflow-hidden">
					{video.name}
				</h3>
				<div className="flex justify-between items-center text-sm text-gray-500">
					<span>{formatDistance(video.created_time, new Date())}</span>
				</div>
			</CardContent>
		</Card>
	);
}
