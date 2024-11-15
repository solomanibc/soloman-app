"use client";

import { Button } from "@/components/ui/button";
import { type Media, getMedias } from "@/query/media.query";
import { useEffect, useState } from "react";
import { VideoCard } from "./video-card";

export default function MediaPage() {
	const [videos, setVideos] = useState<Media[]>([]);
	const [currentCursor, setCurrentCursor] = useState<string | null>(null);
	const [nextCursor, setNextCursor] = useState<string | null>(null);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		const fetchVideos = async (cursor: string | null) => {
			const data = await getMedias(cursor);
			console.log(data);
			setVideos((items) => [...items, ...data.results]);
			setNextCursor(data.nextCursor ?? null);
			setHasMore(data.hasMore);
		};

		fetchVideos(currentCursor ?? "");
	}, [currentCursor]);

	return (
		<>
			{/* Hero Section */}
			<div className="relative bg-gray-50">
				<section className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
					<div className="absolute z-0 inset-0 bg-black/60" />
					<div className="relative container mx-auto px-4 h-full flex items-center">
						<div className="max-w-2xl text-white">
							<h1 className="text-5xl font-bold mb-6">Media Center</h1>
							<p className="text-xl text-gray-200">
								Explore our collection of educational videos about business,
								finance, and corporate services
							</p>
							<div className="mt-4 text-gray-200">
								<span className="font-semibold">{videos.length}</span> videos
								available
							</div>
						</div>
					</div>
				</section>

				{/* Videos Grid */}
				<section className="py-20">
					<div className="container mx-auto px-4">
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
									Load More
								</Button>
							</div>
						)}
					</div>
				</section>
			</div>
		</>
	);
}
