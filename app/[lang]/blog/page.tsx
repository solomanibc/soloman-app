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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{articles.map((article) => (
							<ArticleCard key={article.id} article={article} lang={lang} />
						))}
					</div>
				</div>
			</Section>
		</div>
	);
}
