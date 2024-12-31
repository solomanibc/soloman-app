import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { ReactElement } from "react";

export interface InvestigationServiceProps {
	icon: ReactElement;
	title: string;
	description: string;
	features: string[];
}

export const InvestigationServiceCard = ({
	icon,
	title,
	description,
	features,
}: InvestigationServiceProps) => {
	return (
		<Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
			<CardContent className="p-6">
				<div className="flex items-center gap-4 mb-4">
					<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
						{icon}
					</div>
					<h3 className="text-xl font-semibold">{title}</h3>
				</div>
				<p className="text-gray-600 mb-4">{description}</p>
				<ul className="space-y-2">
					{features.map((feature) => (
						<li key={feature} className="flex items-start gap-2">
							<ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
							<span className="text-gray-700">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};
