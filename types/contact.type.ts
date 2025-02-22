export interface Contact {
	title: string;
	description: string;
	namePlaceholder: string;
	emailPlaceholder: string;
	messagePlaceholder: string;
	companyName: string;
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
}
