import { Section } from "@/components/Section";
import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";
import { ConcatInfo } from "./ConcatInfo";
import ContactForm from "./ContactForm";
import { MapContact } from "./map-contact";

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

			<Section className="grid md:grid-cols-2 gap-8 mx-auto">
				<ContactForm lang={lang} />

				<MapContact />
			</Section>

			<ConcatInfo lang={lang} />
		</>
	);
}
