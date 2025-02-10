import "server-only";

interface ServiceItem {
	title: string;
	description?: string;
	items?: string[];
	features?: string[];
	icon?: string;
}

interface InvestigationService {
	title: string;
	description?: string;
	list: ServiceItem[];
}

interface ServicesInvestigation {
	title: string;
	description: string;
	button_corporate: string;
	button_personal: string;
	conclusion: string;
	corporate: InvestigationService;
	personal: InvestigationService;
}

interface Founder {
	title: string;
	name: string;
	graduation: string;
	experience: string;
	relocating: string;
}

interface ApproachItem {
	title: string;
	description: string;
}

interface OurApproach {
	title: string;
	list: ApproachItem[];
}

interface TeamMember {
	title: string;
	description: string;
	icon: string;
}

interface ProfessionalTeam {
	title: string;
	description: string;
	list: TeamMember[];
	excellence: string;
}

interface About {
	title: string;
	founder: Founder;
	ourApproach: OurApproach;
	professionalTeam: ProfessionalTeam;
}

interface CTA {
	title: string;
	description: string;
	button: string;
}

export interface Dictionary {
	nav: {
		home: string;
		about: string;
		contact: string;
		blog: string;
		servicesInvestigation: string;
		ourProfessionalism: string;
		businessConsultancy: string;
		media: string;
		hkpda: string;
	};
	services_investigation: ServicesInvestigation;
	about: About;
	cta: CTA;
	// ... other dictionary fields
}

const dictionaries = {
	en: () => import("@/dictionaries/en.json").then((module) => module.default),
	cmn: () => import("@/dictionaries/cmn.json").then((module) => module.default),
	zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export type Locale = "en" | "zh" | "cmn";
export interface LocaleParams {
	lang: Locale;
}

export const getDictionary = async (locale: keyof typeof dictionaries) =>
	dictionaries[locale]();
