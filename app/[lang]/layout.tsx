import "@/app/globals.css";
import type { Metadata } from "next";
import Footer from "./Footer";
import Header from "./Header";
import type { Locale } from "./dictionaries";

export const metadata: Metadata = {
	title: "Soloman IBC",
	description: "Soloman",
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

	return (
		<html lang={lang}>
			<body className="min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white">
				<Header lang={lang} />
				<main className="container mx-auto px-4 py-6 flex justify-between items-center mb-12">
					{children}
				</main>
				<Footer lang={lang} />
			</body>
		</html>
	);
}
