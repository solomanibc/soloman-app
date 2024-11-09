"use client";

import { Media, getMedias } from "@/query/media.query";
import { useEffect, useState } from "react";
import { VideoCard } from "./video-card";

export default function MediaPage() {
  const [videos, setVideos] = useState<Media[]>([]);
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const fetchVideos = async (cursor: string | null) => {
    const data = await getMedias(cursor);
    console.log(data);
    setVideos((items) => [...items, ...data.results]);
    setNextCursor(data.nextCursor ?? null);
    setHasMore(data.hasMore);
  };

  useEffect(() => {
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
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center">
                <button
                  onClick={() => setCurrentCursor(nextCursor)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
