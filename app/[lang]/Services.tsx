import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Zap } from "lucide-react";
import Link from "next/link";
export default async function Services({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<div className="bg-gray-50">
			<Section>
				<h2 className="text-3xl font-bold text-center mb-12">
					{dict.services.title}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card>
						<CardContent className="p-6">
							<Link href={`/${lang}/services/corporate`}>
								<Briefcase className="w-12 h-12 mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">
									{dict.services.corporate.title}
								</h3>
								<p>{dict.services.corporate.description}</p>
							</Link>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">
							<Link href={`/${lang}/services/individual`}>
								<Zap className="w-12 h-12 mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">
									{dict.services.individual.title}
								</h3>
								<p>{dict.services.individual.description}</p>
							</Link>
						</CardContent>
					</Card>
				</div>
			</Section>
		</div>
	);
}
