import type React from "react";

import { CheckCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface MarketSectionProps {
	title: string;
	icon: React.ReactNode;
	services: {
		id: string;
		title: string;
		items: string[];
	}[];
}

export const MarketSection = ({
	icon,
	services,
	title,
}: MarketSectionProps) => {
	return (
		<div className="mb-16">
			<div className="flex items-center gap-4 mb-8">
				<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-primary">
					{icon}
				</div>
				<h2 className="text-3xl font-bold">{title}</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{services.map((service) => (
					<Card
						key={service.id}
						className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<CardContent className="p-6">
							<div className="flex items-start gap-4">
								<div className="mt-1">
									<CheckCircle className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										{service.title}
									</h3>
									<p className="text-gray-600">
										{service.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};
