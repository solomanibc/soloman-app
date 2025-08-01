import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeroProps {
	title: string;
	description?: string;
	image: string;
	height?: "small" | "medium" | "large";
	children?: ReactNode;
	className?: string;
}

export function Hero({
	children,
	className,
	description,
	height = "medium",
	image,
	title,
}: HeroProps) {
	const heightClasses = {
		small: "h-[30vh]",
		medium: "h-[50vh]",
		large: "h-[70vh]",
	};

	return (
		<section
			className={cn(
				"relative bg-cover bg-center",
				heightClasses[height],
				className,
			)}
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="absolute inset-0 bg-black/60" />
			<div className="relative container mx-auto px-4 h-full flex items-center">
				<div className="max-w-3xl text-white">
					<h1 className="text-5xl font-bold mb-6">{title}</h1>
					{description && (
						<p className="text-xl text-gray-200 mb-8">{description}</p>
					)}
					{children}
				</div>
			</div>
		</section>
	);
}
