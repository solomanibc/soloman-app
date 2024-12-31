import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { ReactElement } from "react";

export const DynamicIcon = ({
	name,
	className,
}: {
	name: keyof typeof LucideIcons;
	className?: string;
}): ReactElement => {
	const Icon: LucideIcon = LucideIcons[name] as LucideIcon;
	return <Icon className={cn("text-primary", className)} />;
};
