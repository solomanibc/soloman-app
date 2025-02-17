import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		BASE_URL: z.string().url(),
		NOTION_API_KEY: z.string().min(1),
		NOTION_DATABASE_BLOG_ID: z.string().min(1),
		NOTION_DATABASE_MEDIA_ID: z.string().min(1),
		UMAMI_WEBSITE_ID: z.string().min(1),
	},
	client: {},
	experimental__runtimeEnv: {
		BASE_URL: process.env.BASE_URL,
		NOTION_API_KEY: process.env.NOTION_API_KEY,
		NOTION_DATABASE_BLOG_ID: process.env.NOTION_DATABASE_BLOG_ID,
		NOTION_DATABASE_MEDIA_ID: process.env.NOTION_DATABASE_MEDIA_ID,
		UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
	},
});
