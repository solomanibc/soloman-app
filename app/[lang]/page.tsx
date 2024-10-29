import Expertise from "@/app/[lang]/Expertise";
import Feature from "@/app/[lang]/Feature";
import Hero from "@/app/[lang]/Hero";
import Services from "@/app/[lang]/Services";
import TrustedCompanies from "@/app/[lang]/TrustedCompanies";
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
			<TrustedCompanies lang={lang} />
			<Feature lang={lang} />
		</>
	);
}
