import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Soloman IBC",
		short_name: "Soloman IBC",
		description:
			"Soloman IBC provides expert international business consulting services, specializing in market entry strategies, cross-border operations, and global business development.",
		start_url: "/",
		display: "standalone",
		background_color: "hsl(201 76% 50%)",
		theme_color: "hsl(201 76% 50%)",
		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
