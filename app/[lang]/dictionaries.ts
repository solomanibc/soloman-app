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

interface OldFooter {
	copyright: string;
	quickLinks: string;
	services: string;
	followUs: string;
	description: string;
}

interface NewFooter {
	title: string;
	description: string;
	navigation: string;
	contact: {
		title: string;
		address: string;
		phone: string;
		email: string;
	};
	copyright: string;
}

export interface Dictionary {
	nav: {
		home: string;
		about: string;
		servicesInvestigation: string;
		businessConsultancy: string;
		blog: string;
		media: string;
		contact: string;
	};
	footer: OldFooter | NewFooter;
	services_investigation: ServicesInvestigation;
	about: About;
	cta: CTA;
	trusted: {
		title: string;
	};
	services: {
		title: string;
		corporate: {
			title: string;
			description: string;
		};
		individual: {
			title: string;
			description: string;
		};
	};
	blog: {
		title: string;
		description: string;
	};
	feature: {
		imageAlt: string;
		title: string;
		description: string;
		cta: string;
	};
	contact: {
		title: string;
		description: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		messagePlaceholder: string;
		submit: string;
		callUs: string;
		emailUs: string;
		visitUs: string;
		phone: string;
		email: string;
		registeredAddress: {
			title: string;
			lines: string[];
		};
		hkOffice: {
			title: string;
			lines: string[];
		};
		ukOffice: {
			title: string;
			lines: string[];
		};
	};
	hero: {
		title: string;
		description: string;
		cta: string;
		imageAlt: string;
	};
	expertise: {
		title: string;
		description: string;
		imageAlt: string;
		cta: string;
		points: string[];
	};
	addresses: {
		companyName: string;
		registered: {
			title: string;
			street: string;
			floor: string;
			city: string;
		};
		office: {
			title: string;
			building: string;
			street: string;
			city: string;
		};
		hongKong: {
			title: string;
			room: string;
			building: string;
			street: string;
			area: string;
			district: string;
		};
	};
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
