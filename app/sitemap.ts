import { env } from "@/lib/env";
import { getArticles } from "@/query/article.query";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	return [
		{
			url: env.BASE_URL,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh`,
					en: `${env.BASE_URL}/en`,
				},
			},
		},
		{
			url: `${env.BASE_URL}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh/about`,
					en: `${env.BASE_URL}/en/about`,
				},
			},
		},
		{
			url: `${env.BASE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh/blog`,
					en: `${env.BASE_URL}/en/blog`,
				},
			},
		},
		{
			url: `${env.BASE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh/contact`,
					en: `${env.BASE_URL}/en/contact`,
				},
			},
		},
		{
			url: `${env.BASE_URL}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh/services`,
					en: `${env.BASE_URL}/en/services`,
				},
			},
		},
		{
			url: `${env.BASE_URL}/our-professionalism`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
			alternates: {
				languages: {
					zh: `${env.BASE_URL}/zh/our-professionalism`,
					en: `${env.BASE_URL}/en/our-professionalism`,
				},
			},
		},
		...(await getArticlesMaps()),
	];
};

const getArticlesMaps = async (): Promise<MetadataRoute.Sitemap> => {
	const results = await getArticles(null);
	return results.articles.map((article) => ({
		url: `${env.BASE_URL}/blog/${article.id}`,
		lastModified: new Date(article.created_time),
		changeFrequency: "weekly",
		priority: 0.3,
		alternates: {
			languages: {
				zh: `${env.BASE_URL}/zh/blog/${article.id}`,
				en: `${env.BASE_URL}/en/blog/${article.id}`,
			},
		},
	}));
};

export default sitemap;
