import Link from "next/link";

import type { Dictionary } from "@/types/dictionnary.type";

export function QuickLinks({ dict, lang }: { dict: Dictionary; lang: string }) {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.footer.quickLinks}</h4>
			<ul className="space-y-2">
				<li>
					<Link className="hover:underline" href={`/${lang}`}>
						{dict.nav.home}
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href={`/${lang}/about`}>
						{dict.nav.about}
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline"
						href={`/${lang}/services-investigation`}
					>
						{dict.nav.servicesInvestigation}
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline"
						href={`/${lang}/business-consultancy`}
					>
						{dict.nav.businessConsultancy}
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href={`/${lang}/blog`}>
						{dict.nav.blog}
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href={`/${lang}/media`}>
						{dict.nav.media}
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href={`/${lang}/contact`}>
						{dict.nav.contact}
					</Link>
				</li>
			</ul>
		</div>
	);
}
