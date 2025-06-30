import { formatDistance } from "date-fns";
import { Clock } from "lucide-react";
import Image from "next/image";

import { Block } from "@/components/Notion/Block";
import { Section } from "@/components/Section";
import { getArticle } from "@/query/article.query";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const article = await getArticle(id);

	return (
		<>
			<Section className="pb-4 flex flex-col items-center">
				<h1 className="text-4xl font-bold text-center">{article.title}</h1>
				<Image
					alt={article.title}
					className="rounded-lg object-cover mt-4"
					height={400}
					src={article.imageCover ?? "/images/blog-placeholder.jpg"}
					width={600}
				/>
				<div className="flex items-center mt-4 gap-4 text-sm text-gray-500">
					<time dateTime={article.created_time.toISOString()}>
						{formatDistance(new Date(article.created_time), new Date(), {
							addSuffix: true,
						})}
					</time>
					<div className="flex items-center gap-4 text-sm text-gray-500">
						<Clock className="w-4 h-4" />
						{article.readTime}
					</div>
				</div>
			</Section>

			<Section className="py-4">
				{article.blocks.map((block) => (
					<Block key={block.id} block={block} />
				))}
			</Section>

			<div className="text-sm text-gray-500 text-center my-8">
				Written by {article.author?.name ?? "Soloman IBC"}
			</div>
		</>
	);
}
