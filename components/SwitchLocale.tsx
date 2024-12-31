"use client";

import type { Locale } from "@/app/[lang]/dictionaries";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const languages: { code: Locale; name: string }[] = [
	{ code: "en", name: "English" },
	{ code: "zh", name: "正體中文" },
	{ code: "cmn", name: "简体字" },
];

export const SwitchLocale = ({ lang }: { lang: Locale }) => {
	const router = useRouter();
	const pathname = usePathname();

	const changeLocale = (locale: string) => {
		const newLang = locale;
		const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
		return router.push(newPathname);
	};

	return (
		<>
			<div className="flex md:hidden justify-center relative">
				<div className="flex items-center gap-2">
					{languages.map((language) => (
						<Link
							key={language.code}
							className={cn(
								"text-sm font-medium text-primary hover:underline",
								buttonVariants({ variant: "ghost" }),
							)}
							onClick={() => {
								changeLocale(language.code);
							}}
							href={`/${language.code}${pathname.replace(`/${lang}`, "")}`}
						>
							{language.name}
						</Link>
					))}
				</div>
			</div>

			<div className="hidden md:flex items-center relative ">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="sm" className="w-9 px-0">
							<Globe className="h-4 w-4 text-primary" />
							<span className="sr-only">Switch language</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{languages.map((language) => (
							<DropdownMenuItem
								key={language.code}
								onClick={() => {
									changeLocale(language.code);
								}}
							>
								<span
									className={cn(
										"mr-2",
										buttonVariants({ variant: "ghost" }),
										lang === language.code ? "font-semibold" : "",
									)}
								>
									{language.name}
								</span>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</>
	);
};
