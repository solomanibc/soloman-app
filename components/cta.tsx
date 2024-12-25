import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const CTA = () => {
	return (
		<div className="mt-20 text-center">
			<h3 className="text-2xl font-bold mb-6">
				Ready to Expand Your Business?
			</h3>
			<p className="text-lg text-gray-600 mb-8">
				Contact us for a detailed consultation tailored to your business Contact
				us for a detailed consultation tailored to your business needs
			</p>
			<Link
				href="https://cal.com/soloman-ibc-appointement/30min"
				target="_blank"
				className={cn(
					"bg-primary hover:bg-primary/80",
					buttonVariants({ variant: "default" }),
				)}
			>
				Schedule Consultation
			</Link>
		</div>
	);
};
