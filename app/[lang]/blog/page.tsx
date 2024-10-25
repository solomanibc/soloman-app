import { type Locale, getDictionary } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { getDatabase } from "@/lib/notion";

export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const database = await getDatabase();

	console.log(database);
	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-12">
				{dict.blog.title}
			</h2>
		</Section>
	);
}
