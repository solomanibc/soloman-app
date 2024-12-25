import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

interface SkillCardProps {
	title: string;
	description: string;
	icon: keyof typeof LucideIcons;
}

const DynamicIcon = ({
	name,
}: { name: keyof typeof LucideIcons }): ReactElement => {
	const Icon: LucideIcon = LucideIcons[name] as LucideIcon;
	return <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />;
};

export function SkillCard({ title, description, icon }: SkillCardProps) {
	return (
		<Card className="border-none shadow-lg">
			<CardContent className="p-6 text-center">
				<DynamicIcon name={icon} />
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}
