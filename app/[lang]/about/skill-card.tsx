import { Card, CardContent } from "@/components/ui/card";
import type { ReactElement } from "react";

interface SkillCardProps {
	title: string;
	description: string;
	icon: ReactElement;
}

export function SkillCard({ title, description, icon }: SkillCardProps) {
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
