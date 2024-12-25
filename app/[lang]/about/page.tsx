import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";
import { FounderCard } from "./founder-card";
import { OurApproachCard } from "./our-approach-card";
import { OurProfessionalTeamCard } from "./our-professional-team-card";
import { SkillCards } from "./skill-cards";

export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="container mx-auto px-4 pt-10 pb-20">
			<h2 className="text-3xl font-bold mb-6">{dict.about.title}</h2>

			<FounderCard dict={dict} />

			<OurProfessionalTeamCard dict={dict} />

			<SkillCards />

			<OurApproachCard dict={dict} />
		</div>
	);
}
