import "@/app/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
import type { Locale } from "./dictionaries";
import { getDictionary } from "./dictionaries";

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Soloman IBC",
	description: "Soloman",
	openGraph: {
		title: "Soloman IBC",
		description: "Soloman",
	},
	publisher: "Soloman IBC",
	authors: [{ name: "Soloman IBC", url: "https://solomanibc.com" }],
	robots: "index, follow",
	creator: "Soloman IBC",
};

// Modifiez la définition des props ici
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<html lang={lang}>
			<body
				className={cn(
					"min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white mt-20",
					lexend.className,
				)}
			>
				<Header lang={lang} nav={dict.nav} />
				<main>{children}</main>
				<Footer lang={lang} />
			</body>
		</html>
	);
}
