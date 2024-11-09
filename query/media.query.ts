"use server";

import { env } from "@/lib/env";
import { notion } from "@/lib/notion";
import type { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Media = {
	id: string;
	name: string;
	url: string;
	created_time: Date;
};

type NotionMedia = DatabaseObjectResponse & {
	id: string;
	created_time: string;
	properties: {
		name: { title: { plain_text: string }[] };
		url: { url: string };
	};
};

const PAGE_SIZE = 9;

export const getMedias = async (startCursor: string | null) => {
	const response = await notion.databases.query({
		database_id: env.NOTION_DATABASE_MEDIA_ID,
		page_size: PAGE_SIZE,
		start_cursor:
			startCursor === null
				? undefined
				: startCursor === ""
					? undefined
					: startCursor,
		sorts: [
			{
				timestamp: "created_time",
				direction: "descending",
			},
		],
		filter: {
			property: "status",
			status: {
				equals: "Done",
			},
		},
	});

	if (!("results" in response)) {
		throw new Error("Failed to fetch medias");
	}

	return {
		results: makeMedias(response.results as NotionMedia[]),
		nextCursor: response.next_cursor ?? undefined,
		hasMore: response.has_more,
	};
};

const makeMedias = (medias: NotionMedia[]) => {
	return medias.map((media) => ({
		id: media.id,
		name: media.properties.name.title[0].plain_text,
		url: media.properties.url.url,
		created_time: new Date(media.created_time),
	}));
};
