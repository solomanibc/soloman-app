import type { Dictionary } from "@/app/[lang]/dictionaries";
import { DynamicIcon } from "@/components/dynamic-icon";
import type * as LucideIcons from "lucide-react";
import { SkillCard } from "./skill-card";

export const OurProfessionalTeamCard = ({ dict }: { dict: Dictionary }) => {
	return (
		<div className="mb-16 ">
			<h3 className="text-2xl font-bold mb-4">
				{dict.about.professionalTeam.title}
			</h3>
			<p className="text-lg text-gray-600">
				{dict.about.professionalTeam.description}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-8">
				{dict.about.professionalTeam.list.map((item) => (
					<SkillCard
						key={item.title}
						title={item.title}
						description={item.description}
						icon={
							<DynamicIcon
								name={item.icon as keyof typeof LucideIcons}
								className="w-12 h-12 mx-auto mb-4"
							/>
						}
					/>
				))}
			</div>
			<p className="text-lg text-gray-600">
				{dict.about.professionalTeam.excellence}
			</p>
		</div>
	);
};
