import type { Contact } from "./contact.type";

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

interface Footer {
	quickLinks: string;
	followUs: string;
	partnerships: string;
	description: string;
	copyright: string;
}

interface BusinessConsultancyService {
	id: string;
	title: string;
	items: string[];
}

interface BusinessConsultancy {
	title: string;
	description: string;
	ukMarket: {
		title: string;
		services: BusinessConsultancyService[];
	};
	hkMarket: {
		title: string;
		services: BusinessConsultancyService[];
	};
	globalMarket: {
		title: string;
		services: BusinessConsultancyService[];
	};
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
	footer: Footer;
	services_investigation: ServicesInvestigation;
	businessConsultancy: BusinessConsultancy;
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
	media: {
		video_count: string;
		title: string;
		description: string;
		load_more: string;
	};
	feature: {
		imageAlt: string;
		title: string;
		description: string;
		cta: string;
	};
	contact: Contact;
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
