import { getArticle } from "@/query/article.query";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const article = await getArticle(id);

	return (
		<div>
			<h1>{article.title}</h1>
		</div>
	);
}
