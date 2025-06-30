import type { ReactElement } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
	title: string;
	description: string;
	icon: ReactElement;
}

export function SkillCard({ description, icon, title }: SkillCardProps) {
	return (
		<Card className="border-none shadow-lg">
			<CardContent className="p-6 text-center">
				{icon}
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}
