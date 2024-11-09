import { env } from "@/lib/env";
import { notion } from "@/lib/notion";
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  SelectPropertyItemObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Locale } from "../app/[lang]/dictionaries";

export type Article = {
  id: string;
  title: string;
  created_time: Date;
  imageCover: string;
  lang: Locale;
  author?: {
    name: string;
    avatar: string;
  };
  readTime?: number;
  excerpt?: string;
};

export type ArticleContent = Article & {
  blocks: BlockObjectResponse[];
};

type NotionArticle = DatabaseObjectResponse & {
  properties: {
    lang: SelectPropertyItemObjectResponse;
    Name: {
      title?: TextRichTextItemResponse[];
    };
  };
  cover?: {
    type: "external" | "file";
    external?: {
      url: string;
    };
    file?: {
      url: string;
    };
  };
};

type GetArticlesResponse = {
  articles: Article[];
  nextCursor: string | null;
  hasMore: boolean;
};

const PAGE_SIZE = 9;

export const getArticles = async (
  startCursor: string | null
): Promise<GetArticlesResponse> => {
  const response = await notion.databases.query({
    database_id: env.NOTION_DATABASE_BLOG_ID,
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
      property: "Status",
      status: {
        equals: "Done",
      },
    },
  });

  return {
    articles: response.results.map((result) =>
      makeArticle(result as NotionArticle)
    ),
    nextCursor: response.next_cursor,
    hasMore: response.has_more,
  };
};

const makeArticle = (notionArticle: NotionArticle): Article => {
  const cover =
    notionArticle.cover?.type === "external"
      ? notionArticle.cover.external?.url
      : notionArticle.cover?.file?.url;

  return {
    id: notionArticle.id,
    lang: notionArticle.properties.lang.select?.name as Locale,
    title: notionArticle.properties.Name.title?.[0]?.plain_text as string,
    created_time: new Date(notionArticle.created_time) as Date,
    imageCover: cover as string,
  };
};

export const getArticle = async (id: string): Promise<ArticleContent> => {
  const response = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  const notionArticle = response as unknown as NotionArticle;

  return {
    ...makeArticle(notionArticle),
    blocks: blocks.results as BlockObjectResponse[],
  };
};
