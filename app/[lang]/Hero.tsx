import Image from "next/image";
import Link from "next/link";

import { getDictionary,type LocaleParams } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

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
					<Button className="bg-primary hover:bg-primary/80" size="lg">
						{dict.hero.cta}
					</Button>
				</Link>
			</div>
			<div className="md:w-1/2">
				<Image
					alt={dict.hero.imageAlt}
					className="rounded-lg shadow-lg"
					height={800}
					src="/images/hero.jpg"
					width={800}
				/>
			</div>
		</Section>
	);
}
