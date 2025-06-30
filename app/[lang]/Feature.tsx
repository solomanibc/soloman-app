import Image from "next/image";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

import { getDictionary,type LocaleParams } from "./dictionaries";

export default async function Feature({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<Section>
			<div className="flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-10 md:mb-0">
					<Image
						alt={dict.feature.imageAlt}
						className="rounded-lg shadow-lg"
						height={400}
						src="/images/feature.jpg"
						width={600}
					/>
				</div>
				<div className="md:w-1/2 md:pl-12">
					<h2 className="text-3xl font-bold mb-6">{dict.feature.title}</h2>
					<p className="text-xl mb-8">{dict.feature.description}</p>
					<Button className="bg-primary hover:bg-primary/80 text-white">
						{dict.feature.cta}
					</Button>
				</div>
			</div>
		</Section>
	);
}
