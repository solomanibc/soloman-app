import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "*.youtube.com",
			},
			{
				protocol: "https",
				hostname: "*youtu.be",
			},
			{
				protocol: "https",
				hostname: "*.notion.so",
			},
		],
	},
};

export default nextConfig;
