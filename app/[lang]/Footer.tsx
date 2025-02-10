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
							<li>
								<Link
									href="https://hk-pi.org.hk"
									className="hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									{dict.nav.hkpda}
								</Link>
							</li>
						</ul>

					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							{dict.addresses.companyName}
						</h4>
						<div className="space-y-6">
							<div>
								<p className="font-semibold mb-2">
									{dict.addresses.registered.title}
								</p>
								<p>{dict.addresses.registered.street}</p>
								<p>{dict.addresses.registered.floor}</p>
								<p>{dict.addresses.registered.city}</p>
							</div>
							<div>
								<p className="font-semibold mb-2">
									{dict.addresses.office.title}
								</p>
								<p>{dict.addresses.office.building}</p>
								<p>{dict.addresses.office.street}</p>
								<p>{dict.addresses.office.city}</p>
							</div>
							<div>
								<p className="font-semibold mb-2">
									{dict.addresses.hongKong.title}
								</p>
								<p>{dict.addresses.hongKong.room}</p>
								<p>{dict.addresses.hongKong.building}</p>
								<p>{dict.addresses.hongKong.street}</p>
								<p>{dict.addresses.hongKong.area}</p>
								<p>{dict.addresses.hongKong.district}</p>
							</div>
						</div>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							{dict.footer.followUs}
						</h4>
						<div className="flex items-center gap-4">
							<Link
								href="https://www.facebook.com/profile.php?id=100091291623092"
								className="hover:text-gray-300"
								target="_blank"
							>
								<Image
									src="/icons/facebook.svg"
									className="invert"
									alt="Facebook"
									width={28}
									height={28}
								/>
							</Link>
							<Link
								href="https://x.com/Abadeenka"
								className="hover:text-gray-300"
								target="_blank"
							>
								<Image
									src="/icons/x.svg"
									className="invert"
									alt="Twitter"
									width={28}
									height={28}
								/>
							</Link>
							<Link
								href="https://www.linkedin.com/in/dimka-abadeen-40686b34b/"
								className="hover:text-gray-300"
								target="_blank"
							>
								<Image
									src="/icons/linkedin.svg"
									className="invert"
									alt="LinkedIn"
									width={28}
									height={28}
								/>
							</Link>
							<Link
								href="https://www.instagram.com/dim.2169"
								className="hover:text-gray-300"
								target="_blank"
							>
								<Image
									src="/icons/instagram.svg"
									className="invert"
									alt="Instagram"
									width={28}
									height={28}
								/>
							</Link>
							<Link
								href="https://www.tiktok.com/@dimka.abadeen?_t=ZG-8thSLfrYBVI&_r=1"
								className="hover:text-gray-300"
								target="_blank"
							>
								<Image
									src="/icons/tiktok.svg"
									className="invert"
									alt="TikTok"
									width={28}
									height={28}
								/>
							</Link>
							<Link
								href="https://www.xiaohongshu.com/explore"
								className="hover:text-gray-300"
								target="_blank"
							>
								<div className="w-[28px] h-[28px] bg-white rounded-sm flex items-center justify-center">
									<Image
										src="/images/Rednote.jpg"
										alt="RedNote"
										width={20}
										height={12}
										className="object-contain"
									/>
								</div>

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
