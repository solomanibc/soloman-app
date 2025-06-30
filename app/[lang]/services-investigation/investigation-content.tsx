"use client";

import { useState } from "react";

import { Building2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/types/dictionnary.type";

import { CorporateInvestigations } from "./corporate";
import { PersonalInvestigations } from "./personal";

export function InvestigationContent({
	dict,
	type,
}: {
	dict: Dictionary;
	type?: "corporate" | "personal" | undefined;
}) {
	const [activeTab, setActiveTab] = useState<"corporate" | "personal">(
		type || "corporate",
	);

	return (
		<div>
			<div
				className="z-10 flex justify-center mb-8 md:flex-row flex-col md:gap-8 gap-4 mt-40"
				style={{ transition: "all 0.3s ease", marginTop: "-40px" }}
			>
				<Button
					className="md:w-auto w-full"
					variant={activeTab === "corporate" ? "default" : "outline"}
					onClick={() => setActiveTab("corporate")}
				>
					<Building2 className="mr-2 h-4 w-4" />
					{dict.services_investigation.button_corporate}
				</Button>
				<Button
					className="md:w-auto w-full"
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
