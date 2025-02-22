import { cn } from "@/lib/utils";
import type { Dictionary } from "@/types/dictionnary.type";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const CTA = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="my-20 text-center">
			<h3 className="text-2xl font-bold mb-6">{dict.cta.title}</h3>
			<p className="text-lg text-gray-600 mb-8">{dict.cta.description}</p>
			<Link
				href="https://cal.com/soloman-ibc-appointement/30min"
				target="_blank"
				className={cn(
					"bg-primary hover:bg-primary/80",
					buttonVariants({ variant: "default" }),
				)}
			>
				{dict.cta.button}
			</Link>
		</div>
	);
};
