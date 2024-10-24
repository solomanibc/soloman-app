import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";

export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="container mx-auto px-4 py-20">
			<h1 className="text-3xl font-bold text-center mb-12">
				{dict.about.title}
			</h1>
		</div>
	);
}
