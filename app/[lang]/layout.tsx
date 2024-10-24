import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Soloman IBC",
	description: "Soloman",
};

// Modifiez la définition des props ici
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
