import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { type LocaleParams, getDictionary } from "./dictionaries";

export default async function Feature({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<Section>
			<div className="flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-10 md:mb-0">
					<Image
						src="/images/feature.jpg"
						alt={dict.feature.imageAlt}
						width={600}
						height={400}
						className="rounded-lg shadow-lg"
					/>
				</div>
				<div className="md:w-1/2 md:pl-12">
					<h2 className="text-3xl font-bold mb-6">{dict.feature.title}</h2>
					<p className="text-xl mb-8">{dict.feature.description}</p>
					<Button className="bg-blue-600 hover:bg-blue-700 text-white">
						{dict.feature.cta}
					</Button>
				</div>
			</div>
		</Section>
	);
}
