import { DynamicIcon } from "@/components/dynamic-icon";
import type * as LucideIcons from "lucide-react";
import { InvestigationServiceCard } from "./investigation-service-card";

import type { Dictionary } from "../dictionaries";

export const PersonalInvestigations = ({ dict }: { dict: Dictionary }) => {
	const personal = dict.services_investigation.personal;

	return (
		<div id="personal" className="scroll-mt-20">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h2 className="text-3xl font-bold mb-6">{personal.title}</h2>
				<p className="text-lg text-gray-600">{personal.description}</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{personal.list.map((item) => (
					<InvestigationServiceCard
						key={item.title}
						icon={<DynamicIcon name={item.icon as keyof typeof LucideIcons} />}
						title={item.title}
						description={item.description}
						features={item.features}
					/>
				))}
			</div>
		</div>
	);
};
