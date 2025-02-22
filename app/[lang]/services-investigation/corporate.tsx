import type { Dictionary } from "@/types/dictionnary.type";
import { InvestigationServiceCard } from "./investigation-service-card";

export const CorporateInvestigations = ({ dict }: { dict: Dictionary }) => {
	const corporate = dict.services_investigation.corporate;

	return (
		<div id="corporate" className="scroll-mt-20 mb-32">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h2 className="text-3xl font-bold mb-6">{corporate.title}</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{corporate.list.map((item) => (
					<InvestigationServiceCard
						key={item.title}
						title={item.title}
						items={item.items ?? []}
					/>
				))}
			</div>
		</div>
	);
};
