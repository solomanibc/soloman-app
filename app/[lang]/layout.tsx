import "@/app/globals.css";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";
import type { Locale } from "./dictionaries";
import { getDictionary } from "./dictionaries";

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "Soloman IBC - International Business Consulting",
		template: "%s | Soloman IBC",
	},
	description:
		"Soloman IBC provides expert international business consulting services, specializing in market entry strategies, cross-border operations, and global business development.",
	keywords:
		"international business consulting, market entry strategy, cross-border operations, global business development, business expansion",
	openGraph: {
		title: "Soloman IBC - International Business Consulting",
		description:
			"Expert international business consulting services for market entry, cross-border operations, and global business development. Partner with Soloman IBC for your international expansion.",
		images: [`${env.BASE_URL}/images/og.png`],
		type: "website",
		locale: "en_EN",
		siteName: "Soloman IBC",
	},
	publisher: "Soloman International Business Consulting",
	authors: [
		{
			name: "Soloman International Business Consulting",
			url: env.BASE_URL,
		},
		{
			name: "Fahari.pro",
			url: "https://fahari.pro",
		},
	],
	appleWebApp: {
		capable: true,
		title: "Soloman IBC",
		startupImage: "/logo.svg",
	},
	icons: {
		icon: "/logo.svg",
		shortcut: "/logo.svg",
		apple: "/logo.svg",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
		},
	},
	alternates: {
		canonical: env.BASE_URL,
		languages: {
			"en-EN": `${env.BASE_URL}/en`,
			"zh-CN": `${env.BASE_URL}/zh`,
			"cmn-Hans": `${env.BASE_URL}/cmn`,
		},
	},
	manifest: "/manifest.json",
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
	if (!lang) return null;
	const dict = await getDictionary(lang);

	return (
		<html lang={lang}>
			<body
				className={cn(
					"min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white mt-24",
					lexend.className,
				)}
			>
				<Header lang={lang} nav={dict.nav} />
				<main>{children}</main>
				<Footer lang={lang} />
				<Script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id={env.UMAMI_WEBSITE_ID}
				/>
			</body>
		</html>
	);
}
