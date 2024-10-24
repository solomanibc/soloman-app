import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Zap } from "lucide-react";

export default async function Services({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<section className="bg-gray-100 py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					{dict.services.title}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardContent className="p-6">
							<Briefcase className="w-12 h-12 mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2">
								{dict.services.webDesign.title}
							</h3>
							<p>{dict.services.webDesign.description}</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">
							<Zap className="w-12 h-12 mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2">
								{dict.services.digitalMarketing.title}
							</h3>
							<p>{dict.services.digitalMarketing.description}</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="p-6">
							<Users className="w-12 h-12 mb-4 text-primary" />
							<h3 className="text-xl font-bold mb-2">
								{dict.services.graphicDesign.title}
							</h3>
							<p>{dict.services.graphicDesign.description}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
