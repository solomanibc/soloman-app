"use client";

import { Button } from "@/components/ui/button";
import { type Media, getMedias, getTotalMediaCount } from "@/query/media.query";
import type { Dictionary } from "@/types/dictionnary.type";
import { useEffect, useState } from "react";
import { VideoCard } from "./video-card";

export const VideosGrid = ({ dict }: { dict: Dictionary }) => {
	const [videos, setVideos] = useState<Media[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [currentCursor, setCurrentCursor] = useState<string | null>(null);
	const [nextCursor, setNextCursor] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		const fetchVideos = async (cursor: string | null) => {
			getTotalMediaCount().then((count) => setTotal(count));
			getMedias(cursor).then((data) => {
				setVideos((items) => [...items, ...data.results]);
				setNextCursor(data.nextCursor ?? null);
				setHasMore(data.hasMore);
			});
		};

		fetchVideos(currentCursor ?? "");
	}, [currentCursor]);

	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-semibold mb-8">
					{dict.media.video_count.replace("{count}", String(total))}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{videos.map((video) => (
						<span key={video.id}>
							<VideoCard video={video} />
						</span>
					))}
				</div>

				{hasMore && (
					<div className="flex justify-center">
						<Button onClick={() => setCurrentCursor(nextCursor)}>
							{dict.media.load_more}
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};
