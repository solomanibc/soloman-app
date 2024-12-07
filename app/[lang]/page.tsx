import Expertise from "@/app/[lang]/Expertise";
import Hero from "@/app/[lang]/Hero";
import Services from "@/app/[lang]/Services";
import { Suspense } from "react";
import type { Locale } from "./dictionaries";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;

	return (
		<>
			<Suspense>
				{/* @ts-expect-error Async Server Component */}
				<Hero lang={lang} />
				{/* @ts-expect-error Async Server Component */}
				<Services lang={lang} />
				{/* @ts-expect-error Async Server Component */}
				<Expertise lang={lang} />
			</Suspense>
		</>
	);
}
