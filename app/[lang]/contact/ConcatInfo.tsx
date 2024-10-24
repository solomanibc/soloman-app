import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale, getDictionary } from "../dictionaries";

export const ConcatInfo = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);

	return (
		<Section className="mt-12 grid md:grid-cols-3 gap-8 text-center">
			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-2">{dict.contact.callUs}</h2>
					<p>{dict.contact.phone}</p>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-2">{dict.contact.emailUs}</h2>
					<p>
						<a
							href={`mailto:${dict.contact.email}`}
							className="text-blue-600 hover:underline"
						>
							{dict.contact.email}
						</a>
					</p>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="pt-6">
					<h2 className="text-xl font-semibold mb-2">{dict.contact.visitUs}</h2>
					<p>{dict.contact.address}</p>
				</CardContent>
			</Card>
		</Section>
	);
};
