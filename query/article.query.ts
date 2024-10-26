import { notion } from "@/lib/notion";
import type {
	DatabaseObjectResponse,
	SelectPropertyItemObjectResponse,
	TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Locale } from "../app/[lang]/dictionaries";

export type Article = {
	id: string;
	title: string;
	created_time: string;
	imageCover: string;
	lang: Locale;
};

type NotionArticle = DatabaseObjectResponse & {
	properties: {
		lang: SelectPropertyItemObjectResponse;
		Name: {
			title?: TextRichTextItemResponse[];
		};
	};
	cover: {
		type: "external" | "file";
		external?: {
			url: string;
		};
		file?: {
			url: string;
		};
	};
};

export const getArticles = async (): Promise<Article[]> => {
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_BLOG_ID as string,
		sorts: [
			{
				timestamp: "created_time",
				direction: "descending",
			},
		],
		filter: {
			property: "Status",
			status: {
				equals: "Done",
			},
		},
	});

	return response.results.map((result) => makeArticle(result as NotionArticle));
};

const makeArticle = (notionArticle: NotionArticle): Article => {
	const cover =
		notionArticle.cover.type === "external"
			? notionArticle.cover.external?.url
			: notionArticle.cover.file?.url;

	return {
		id: notionArticle.id,
		lang: notionArticle.properties.lang.select?.name as Locale,
		title: notionArticle.properties.Name.title?.[0]?.plain_text as string,
		created_time: notionArticle.created_time as string,
		imageCover: cover as string,
	};
};

export const getArticle = async (id: string): Promise<Article> => {
	const response = await notion.pages.retrieve({
		page_id: id,
	});

	const notionArticle = response as unknown as NotionArticle;

	return makeArticle(notionArticle);
};
