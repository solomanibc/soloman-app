import type { ReactElement } from "react";

import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

import { cn } from "@/lib/utils";

export const DynamicIcon = ({
	className,
	name,
}: {
	name: keyof typeof LucideIcons;
	className?: string;
}): ReactElement => {
	const Icon: LucideIcon = LucideIcons[name] as LucideIcon;
	return <Icon className={cn("text-primary", className)} />;
};
