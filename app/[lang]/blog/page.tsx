import { type Locale, getDictionary } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";

export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-12">
				{dict.blog.title}
			</h2>
		</Section>
	);
}
