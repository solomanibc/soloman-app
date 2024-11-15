"use client";

import type { LocaleParams } from "@/app/[lang]/dictionaries";
import { SwitchLocale } from "@/components/SwitchLocale";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Nav {
	home: string;
	about: string;
	blog: string;
	contact: string;
}

export default function Header({ lang, nav }: LocaleParams & { nav: Nav }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const menu: Record<string, string | Record<string, string>> = {
		home: `/${lang}`,
		about: `/${lang}/about`,
		servicesInvestigation: `/${lang}/services-investigation`,
		businessConsultation: `/${lang}/business-consultation`,
		blog: `/${lang}/blog`,
		media: `/${lang}/media`,
		contact: `/${lang}/contact`,
	};

	return (
		<header className="z-50 container fixed top-0 left-1/2 transform -translate-x-1/2">
			<div className="flex items-center justify-between px-4 py-6 mx-auto bg-white shadow-md h-20 w-full">
				<div className="text-2xl font-bold mr-3">
					<Link href={`/${lang}`}>
						Solo<span className="text-blue-500">man</span> IBC
					</Link>
				</div>
				<nav className="hidden md:flex space-x-6">
					{Object.entries(menu).map(([key, value]) => {
						if (typeof value === "object") {
							return (
								<div key={key} className="relative group">
									<button
										type="button"
										className="text-gray-600 hover:text-gray-900"
									>
										{nav[key as keyof Nav]}
									</button>
									<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
										{Object.entries(value).map(([subKey, subValue]) => (
											<NavLink
												key={subKey}
												href={subValue}
												className="block px-4 py-2 hover:bg-gray-100"
											>
												{nav[subKey as keyof Nav]}
											</NavLink>
										))}
									</div>
								</div>
							);
						}
						return (
							<NavLink key={key} href={value}>
								{nav[key as keyof Nav]}
							</NavLink>
						);
					})}
					<SwitchLocale lang={lang} />
				</nav>
				<button type="button" onClick={toggleMobileMenu} className="md:hidden">
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<nav className={cn(`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`)}>
				<div className="px-4 py-2 space-y-2 bg-white shadow-md text-right">
					{Object.entries(menu).map(([key, value]) => {
						if (typeof value === "object") {
							return Object.entries(value).map(([subKey, subValue]) => (
								<NavLink
									key={`${key}-${subKey}`}
									href={subValue}
									className="block pl-4"
									onClick={toggleMobileMenu}
								>
									{subKey}
								</NavLink>
							));
						}
						return (
							<NavLink
								key={key}
								href={value}
								className="block"
								onClick={toggleMobileMenu}
							>
								{nav[key as keyof Nav]}
							</NavLink>
						);
					})}
					<SwitchLocale lang={lang} />
				</div>
			</nav>
		</header>
	);
}

const NavLink = ({
	href,
	children,
	className,
	...props
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
} & React.ComponentProps<"a">) => (
	<Link
		href={href}
		className={cn("text-gray-600 hover:text-gray-900", className)}
		{...props}
	>
		{children}
	</Link>
);
