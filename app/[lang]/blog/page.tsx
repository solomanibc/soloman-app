import Link from "next/link";

import { getDictionary,type Locale } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { getArticles } from "@/query/article.query";

import { ArticleCard } from "./ArticleCard";

export default async function About({
	params,
	searchParams,
}: {
	params: Promise<{ lang: Locale }>;
	searchParams: Promise<{ cursor: string | null }>;
}) {
	const { cursor } = await searchParams;
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const articles = await getArticles(cursor);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<Section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl font-bold mb-6">{dict.blog.title}</h1>
						<p className="text-xl text-gray-600">{dict.blog.description}</p>
					</div>
				</div>
			</Section>

			{/* Blog Posts Grid */}
			<Section className="py-20">
				<div className="container mx-auto px-4">
					{articles.articles.length === 0 && (
						<div className="text-center text-gray-600">No articles found</div>
					)}

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{articles.articles.map((article) => (
							<ArticleCard key={article.id} article={article} lang={lang} />
						))}
					</div>
				</div>
			</Section>

			{articles.hasMore && (
				<Link href={`/${lang}/blog?cursor=${articles.nextCursor}`}>
					<Button>Voir plus</Button>
				</Link>
			)}
		</div>
	);
}
