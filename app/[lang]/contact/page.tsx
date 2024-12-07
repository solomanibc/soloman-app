import { Section } from "@/components/Section";
import Image from "next/image";
import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";
import { ConcatInfo } from "./ConcatInfo";
import ContactForm from "./ContactForm";

export default async function Contact({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<>
			<Section className="py-5">
				<h2 className="text-3xl font-bold text-center mb-12 mt-5">
					{dict.contact.title}
				</h2>
				<p className="text-center text-gray-600 mb-8">
					{dict.contact.description}
				</p>
			</Section>

			<Section className="grid md:grid-cols-2 gap-8">
				{/* @ts-expect-error Async Server Component */}
				<ContactForm lang={lang} />

				<div className="bg-gray-200 rounded-lg overflow-hidden">
					{/* Placeholder for the map */}
					<div className="h-full w-full bg-gray-300 flex items-center justify-center">
						<Image
							src="/images/united-kingdom.svg"
							alt="Carte de Halifax, Royaume-Uni"
							width={400}
							height={300}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</Section>

			{/* @ts-expect-error Async Server Component */}
			<ConcatInfo lang={lang} />
		</>
	);
}
