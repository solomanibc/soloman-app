import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Header({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<header className="container mx-auto px-4 py-6 flex justify-between items-center">
			<div className="text-2xl font-bold">Soloman IBC</div>
			<nav className="hidden md:flex space-x-6">
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					{dict.nav.home}
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					{dict.nav.product}
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					{dict.nav.about}
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					{dict.nav.pricing}
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					{dict.nav.contact}
				</Link>
			</nav>
		</header>
	);
}
