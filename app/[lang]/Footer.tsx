import { Section } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { type LocaleParams, getDictionary } from "./dictionaries";

export default async function Footer({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<footer className="bg-gray-900 text-white py-12">
			<Section>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
							<Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
							Soloman <span className="text-primary">IBC</span>
						</h3>
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
									href={`/${lang}/services-investigation/individual`}
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
							<Link
								href="https://www.facebook.com/profile.php?id=61573030075420&rdid=afqjUUWYu7S05geI&share_url=https://www.facebook.com/share/1LycgL77cB/"
								className="hover:text-gray-300"
							>
								<Image
									src="/icons/facebook.svg"
									className="invert"
									alt="Facebook"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="https://x.com/Abadeenka"
								className="hover:text-gray-300"
							>
								<Image
									src="/icons/x.svg"
									className="invert"
									alt="Twitter"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="https://www.linkedin.com/in/dimka-abadeen-40686b34b/"
								className="hover:text-gray-300"
							>
								<Image
									src="/icons/linkedin.svg"
									className="invert"
									alt="LinkedIn"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="https://www.instagram.com/dim.2169"
								className="hover:text-gray-300"
							>
								<Image
									src="/icons/instagram.svg"
									className="invert"
									alt="Instagram"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="https://www.tiktok.com/@dimka.abadeen?_t=ZG-8thSLfrYBVI&_r=1"
								className="hover:text-gray-300"
							>
								<Image
									src="/icons/tiktok.svg"
									className="invert"
									alt="TikTok"
									width={24}
									height={24}
								/>
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
