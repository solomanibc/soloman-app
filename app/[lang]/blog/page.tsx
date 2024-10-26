import { type Locale, getDictionary } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { getArticles } from "../../../query/article.query";
import { ArticleCard } from "./ArticleCard";
export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const articles = await getArticles();

	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-12">
				{dict.blog.title}
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</Section>
	);
}
