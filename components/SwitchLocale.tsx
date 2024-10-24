"use client";

import type { Locale } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const languages = [
	{ code: "en", name: "English" },
	{ code: "zh", name: "中文 (简体)" },
	{ code: "cmn", name: "普通话" },
];

export const SwitchLocale = ({ lang }: { lang: Locale }) => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="relative">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="sm" className="w-9 px-0">
						<Globe className="h-4 w-4" />
						<span className="sr-only">Switch language</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{languages.map((language) => (
						<DropdownMenuItem
							key={language.code}
							onClick={() => {
								const newLang = language.code;
								const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
								return router.push(newPathname);
							}}
						>
							<span className={lang === language.code ? "font-semibold" : ""}>
								{language.name}
							</span>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
