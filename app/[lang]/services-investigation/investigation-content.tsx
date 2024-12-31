"use client";

import { Button } from "@/components/ui/button";
import { Building2, Users } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "../dictionaries";
import { CorporateInvestigations } from "./corporate";
import { PersonalInvestigations } from "./personal";

export function InvestigationContent({ dict }: { dict: Dictionary }) {
	const [activeTab, setActiveTab] = useState<"corporate" | "personal">(
		"corporate",
	);

	return (
		<div>
			<div className="flex justify-center gap-4 mb-8">
				<Button
					variant={activeTab === "corporate" ? "default" : "outline"}
					onClick={() => setActiveTab("corporate")}
				>
					<Building2 className="mr-2 h-4 w-4" />
					{dict.services_investigation.button_corporate}
				</Button>
				<Button
					variant={activeTab === "personal" ? "default" : "outline"}
					onClick={() => setActiveTab("personal")}
				>
					<Users className="mr-2 h-4 w-4" />
					{dict.services_investigation.button_personal}
				</Button>
			</div>

			{activeTab === "corporate" ? (
				<CorporateInvestigations dict={dict} />
			) : (
				<PersonalInvestigations dict={dict} />
			)}
		</div>
	);
}
