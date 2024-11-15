import type { Locale } from "@/app/[lang]/dictionaries";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "../../../query/article.query";

export const ArticleCard = ({
	lang,
	article,
}: {
	lang: Locale;
	article: Article;
}) => {
	return (
		<Link href={`/${lang}/blog/${article.id}`} title={article.title}>
			<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
				<div className="relative h-48">
					<Image
						src={article.imageCover ?? "/images/blog-placeholder.jpg"}
						alt={article.title}
						fill
						className="object-cover"
					/>
				</div>
				<CardContent className="p-6">
					<div className="flex items-center gap-4 mb-4">
						<div className="relative w-8 h-8 rounded-full overflow-hidden">
							<Image
								src={article.author?.avatar ?? "/icons/avatar.svg"}
								alt={article.author?.name ?? "Soloman IBC"}
								fill
								className="object-cover"
							/>
						</div>
						<div className="flex-1">
							<p className="text-sm font-medium">
								{article.author?.name ?? "Soloman IBC"}
							</p>
							<div className="flex items-center gap-4 text-sm text-gray-500">
								<time dateTime={article.created_time.toISOString()}>
									{formatDistance(new Date(article.created_time), new Date(), {
										addSuffix: true,
									})}
								</time>
								<div className="flex items-center gap-1">
									<Clock className="w-4 h-4" />
									{article.readTime}
								</div>
							</div>
						</div>
					</div>
					<h2 className="text-xl font-semibold mb-2 line-clamp-2">
						{article.title}
					</h2>
					<p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
				</CardContent>
			</Card>
		</Link>
	);
};
