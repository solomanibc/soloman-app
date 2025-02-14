"use client";

import type { LocaleParams } from "@/app/[lang]/dictionaries";
import { SwitchLocale } from "@/components/SwitchLocale";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Nav {
	home: string;
	about: string;
	servicesInvestigation: string;
	businessConsultancy: string;
	blog: string;
	media: string;
	contact: string;
}

export default function Header({ lang, nav }: LocaleParams & { nav: Nav }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const menu: Record<string, string> = {
		home: `/${lang}`,
		about: `/${lang}/about`,
		blog: `/${lang}/blog`,
		servicesInvestigation: `/${lang}/services-investigation`,
		businessConsultancy: `/${lang}/business-consultancy`,
		media: `/${lang}/media`,
		contact: `/${lang}/contact`,
	};

	return (
		<header className="z-50 container fixed top-0 left-1/2 transform -translate-x-1/2">
			<div className="flex items-center justify-between px-4 py-6 mx-auto bg-white shadow-md h-20 w-full">
				<div className="text-2xl font-bold mr-3">
					<Link href={`/${lang}`} className="flex items-center gap-2">
						<Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
						<span>
							Solo<span className="text-primary">man</span> IBC
						</span>
					</Link>
				</div>
				<nav className="hidden md:flex space-x-6">
					{Object.entries(menu).map(([key, value]) => {
						return (
							<NavLink key={key} href={value} className="hover:text-primary/80">
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
				<div className="px-4 py-2 space-y-2 bg-white shadow-md text-center">
					{Object.entries(menu).map(([key, value]) => {
						return (
							<NavLink
								key={key}
								href={value}
								className="block hover:text-primary/80"
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
