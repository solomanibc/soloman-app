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

	const menu = {
		home: `/${lang}`,
		about: `/${lang}/about`,
		blog: `/${lang}/blog`,
		contact: `/${lang}/contact`,
	};

	console.log(isMobileMenuOpen);

	return (
		<header className="container fixed top-0 left-1/2 transform -translate-x-1/2">
			<div className="flex items-center justify-between px-4 py-6 mx-auto bg-white shadow-md h-20 w-full">
				<div className="text-2xl font-bold">
					<Link href={`/${lang}`}>
						Solo<span className="text-blue-500">man</span> IBC
					</Link>
				</div>
				<nav className="hidden md:flex space-x-6">
					{Object.entries(menu).map(([key, value]) => (
						<NavLink key={key} href={value}>
							{nav[key as keyof Nav]}
						</NavLink>
					))}
					<SwitchLocale lang={lang} />
				</nav>
				<button type="button" onClick={toggleMobileMenu} className="md:hidden">
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<nav className={cn(`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`)}>
				<div className="px-4 py-2 space-y-2 bg-white shadow-md text-right">
					{Object.entries(menu).map(([key, value]) => (
						<NavLink
							key={key}
							href={value}
							className="block"
							onClick={toggleMobileMenu}
						>
							{nav[key as keyof Nav]}
						</NavLink>
					))}
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
