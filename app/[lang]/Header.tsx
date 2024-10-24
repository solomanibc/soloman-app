import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { SwitchLocale } from "@/components/SwitchLocale";
import Link from "next/link";
export default async function Header({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<header className="container mx-auto px-4 py-6 flex justify-between items-center">
			<div className="text-2xl font-bold">
				<Link href={`/${lang}`}>{dict.nav.home}</Link>
			</div>
			<nav className="flex space-x-6">
				<Link href={`/${lang}`} className="text-gray-600 hover:text-gray-900">
					{dict.nav.home}
				</Link>

				<Link
					href={`/${lang}/about`}
					className="text-gray-600 hover:text-gray-900"
				>
					{dict.nav.about}
				</Link>
				<Link
					href={`/${lang}/blog`}
					className="text-gray-600 hover:text-gray-900"
				>
					{dict.nav.blog}
				</Link>
				<Link
					href={`/${lang}/contact`}
					className="text-gray-600 hover:text-gray-900"
				>
					{dict.nav.contact}
				</Link>
				<SwitchLocale lang={lang} />
			</nav>
		</header>
	);
}
