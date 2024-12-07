import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Hero({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<Section className="flex flex-col md:flex-row items-center gap-3">
			<div className="md:w-1/2 mb-10 md:mb-0">
				<h1 className="text-5xl font-bold mb-6 mr-3 text-balance">
					{dict.hero.title}
				</h1>
				<p className="text-xl mb-8">{dict.hero.description}</p>
				<Link href={`/${lang}/contact`}>
					<Button size="lg" className="bg-primary hover:bg-primary/80">
						{dict.hero.cta}
					</Button>
				</Link>
			</div>
			<div className="md:w-1/2">
				<Image
					src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt={dict.hero.imageAlt}
					width={800}
					height={600}
					className="rounded-lg shadow-lg"
				/>
			</div>
		</Section>
	);
}
