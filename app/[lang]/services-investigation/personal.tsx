import type { Dictionary } from "@/types/dictionnary.type";

import { InvestigationServiceCard } from "./investigation-service-card";

export const PersonalInvestigations = ({ dict }: { dict: Dictionary }) => {
	const personal = dict.services_investigation.personal;

	return (
		<div className="scroll-mt-20" id="personal">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h2 className="text-3xl font-bold mb-6">{personal.title}</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{personal.list.map((item) => (
					<InvestigationServiceCard
						key={`${item.title}-${item.icon || ""}`}
						items={item.items || item.features || []}
						title={item.title}
					/>
				))}
			</div>
		</div>
	);
};
