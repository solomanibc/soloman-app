import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";
import { ConcatInfo } from "./ConcatInfo";
import ContactForm from "./ContactForm";
export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div>
			<h2 className="text-3xl font-bold text-center mb-12">
				{dict.contact.title}
			</h2>
			<p className="text-center text-gray-600 mb-8">
				{dict.contact.description}
			</p>
			<div className="grid md:grid-cols-2 gap-8">
				<ContactForm lang={lang} />

				<div className="bg-gray-200 rounded-lg overflow-hidden">
					{/* Placeholder for the map */}
					<div className="h-full w-full bg-gray-300 flex items-center justify-center">
						<span className="text-gray-600">Map of San Francisco</span>
					</div>
				</div>
			</div>

			<ConcatInfo lang={lang} />
		</div>
	);
}
