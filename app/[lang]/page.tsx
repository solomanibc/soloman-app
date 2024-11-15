import Expertise from "@/app/[lang]/Expertise";
import Hero from "@/app/[lang]/Hero";
import Services from "@/app/[lang]/Services";
import type { Locale } from "./dictionaries";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;

	return (
		<>
			<Hero lang={lang} />
			<Services lang={lang} />
			<Expertise lang={lang} />
		</>
	);
}
