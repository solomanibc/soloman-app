import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Hero({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
			<div className="md:w-1/2 mb-10 md:mb-0">
				<h1 className="text-5xl font-bold mb-6">{dict.hero.title}</h1>
				<p className="text-xl mb-8">{dict.hero.description}</p>
				<Button size="lg">{dict.hero.cta}</Button>
			</div>
			<div className="md:w-1/2">
				<Image
					src="/images/hero.jpg"
					alt={dict.hero.imageAlt}
					width={800}
					height={600}
					className="rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
}
