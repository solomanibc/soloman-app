import Image from "next/image";
import type { Article } from "../../../query/article.query";

export const ArticleCard = ({ article }: { article: Article }) => {
	return (
		<div>
			<Image
				src={article.imageCover}
				alt={article.title}
				width={300}
				height={200}
			/>
			<h3>{article.title}</h3>
			<p>{article.created_time}</p>
		</div>
	);
};
