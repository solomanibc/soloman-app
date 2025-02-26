import { Section } from "@/components/Section";
import ContactInfo from "@/components/contact-info";
import type { Dictionary } from "@/types/dictionnary.type";
import Image from "next/image";
import Link from "next/link";
import { type LocaleParams, getDictionary } from "./dictionaries";

export default async function Footer({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<footer className="bg-gray-900 text-white py-12">
			<Section>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
							<Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
							Soloman <span className="text-primary">IBC</span>
						</h3>
						<p>{dict.footer.description}</p>
					</div>
					<QuickLinks dict={dict} lang={lang} />

					<Partnership dict={dict} />

					<Contact dict={dict} />
				</div>

				<FollowUs dict={dict} />

				<div className="mt-12 text-center border-t border-gray-400 pt-8">
					<p>{dict.footer.copyright}</p>
				</div>
			</Section>
		</footer>
	);
}

const QuickLinks = ({ dict, lang }: { dict: Dictionary; lang: string }) => {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.footer.quickLinks}</h4>
			<ul className="space-y-2">
				<li>
					<Link href={`/${lang}`} className="hover:underline">
						{dict.nav.home}
					</Link>
				</li>
				<li>
					<Link href={`/${lang}/about`} className="hover:underline">
						{dict.nav.about}
					</Link>
				</li>
				<li>
					<Link
						href={`/${lang}/services-investigation`}
						className="hover:underline"
					>
						{dict.nav.servicesInvestigation}
					</Link>
				</li>
				<li>
					<Link
						href={`/${lang}/business-consultancy`}
						className="hover:underline"
					>
						{dict.nav.businessConsultancy}
					</Link>
				</li>
				<li>
					<Link href={`/${lang}/blog`} className="hover:underline">
						{dict.nav.blog}
					</Link>
				</li>
				<li>
					<Link href={`/${lang}/media`} className="hover:underline">
						{dict.nav.media}
					</Link>
				</li>
				<li>
					<Link href={`/${lang}/contact`} className="hover:underline">
						{dict.nav.contact}
					</Link>
				</li>
			</ul>
		</div>
	);
};

const FollowUs = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="space-y-4 text-center border-t border-gray-400 pt-8">
			<div>
				<h4 className="text-lg font-semibold mb-4">{dict.footer.followUs}</h4>
				<div className="flex items-center gap-4 justify-center">
					<Link
						href="https://x.com"
						className="text-gray-500 hover:text-gray-600"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/icons/x.svg"
							className="invert"
							alt="X Twitter"
							width={28}
							height={28}
						/>
					</Link>
					<Link
						href="https://facebook.com"
						className="text-gray-500 hover:text-gray-600"
						target="_blank"
						rel="noopener noreferrer"
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
						href="https://instagram.com"
						className="text-gray-500 hover:text-gray-600"
						target="_blank"
						rel="noopener noreferrer"
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
	);
};

const Contact = ({ dict }: { dict: Dictionary }) => {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.nav.contact}</h4>
			<div className="space-y-4">
				<div>
					<p className="font-medium">{dict.contact.companyName}</p>
				</div>
				<div>
					<p className="font-medium">{dict.contact.registeredAddress.title}</p>
					{dict.contact.registeredAddress.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div>
					<p className="font-medium">{dict.contact.ukOffice.title}</p>
					{dict.contact.ukOffice.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div>
					<p className="font-medium">{dict.contact.hkOffice.title}</p>
					{dict.contact.hkOffice.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div className="mt-4">
					<ContactInfo
						email={dict.contact.email}
						phone={dict.contact.phone}
						classIcon="invert"
					/>
				</div>
			</div>
		</div>
	);
};

const Partnership = ({ dict }: { dict: Dictionary }) => {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.footer.partnerships}</h4>
			<div className="flex items-center space-x-4 justify-center">
				<Image
					src="/icons/pin-uk.png"
					alt="PIN UK Logo"
					width={80}
					height={40}
					className="object-contain"
				/>
			</div>
		</div>
	);
};
