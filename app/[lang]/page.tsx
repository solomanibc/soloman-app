import ContactForm from "@/app/[lang]/ContactForm";
import Feature from "@/app/[lang]/Feature";
import Footer from "@/app/[lang]/Footer";
import Header from "@/app/[lang]/Header";
import Hero from "@/app/[lang]/Hero";
import Services from "@/app/[lang]/Services";
import TrustedCompanies from "@/app/[lang]/TrustedCompanies";
import type { Locale } from "./dictionaries";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: "en" | "zh" }>;
}) {
	const { lang }: { lang: Locale } = await params;

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white">
			<Header lang={lang} />

			<main>
				<Hero lang={lang} />
				<TrustedCompanies lang={lang} />
				<Feature lang={lang} />
				<Services lang={lang} />
				<ContactForm lang={lang} />
			</main>

			<Footer lang={lang} />
		</div>
	);
}
