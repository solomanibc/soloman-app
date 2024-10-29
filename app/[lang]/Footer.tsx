import { Section } from "@/components/Section";
import Link from "next/link";
import { type LocaleParams, getDictionary } from "./dictionaries";

export default async function Footer({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<footer className="bg-gray-900 text-white py-12">
			<Section>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">Soloman IBC</h3>
						<p>{dict.footer.description}</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							{dict.footer.quickLinks}
						</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="hover:underline">
									{dict.nav.home}
								</Link>
							</li>
							<li>
								<Link href={`/${lang}/about`} className="hover:underline">
									{dict.nav.about}
								</Link>
							</li>
							<li>
								<Link href={`/${lang}/blog`} className="hover:underline">
									{dict.nav.blog}
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/our-professionalism`}
									className="hover:underline"
								>
									{dict.nav.ourProfessionalism}
								</Link>
							</li>

							<li>
								<Link href={`/${lang}/contact`} className="hover:underline">
									{dict.nav.contact}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							{dict.footer.services}
						</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href={`/${lang}/services/corporate`}
									className="hover:underline"
								>
									{dict.services.corporate.title}
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/services/individual`}
									className="hover:underline"
								>
									{dict.services.individual.title}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							{dict.footer.followUs}
						</h4>
						<div className="flex space-x-4">
							<Link href="#" className="hover:text-gray-300">
								Facebook
							</Link>
							<Link href="#" className="hover:text-gray-300">
								Twitter
							</Link>
							<Link href="#" className="hover:text-gray-300">
								LinkedIn
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-12 text-center">
					<p>{dict.footer.copyright}</p>
				</div>
			</Section>
		</footer>
	);
}
