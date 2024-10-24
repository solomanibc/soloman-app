import "server-only";

export type Locale = "en" | "zh";
export interface LocaleParams {
	lang: Locale;
}

const dictionaries = {
	en: () => import("@/dictionaries/en.json").then((module) => module.default),
	//  cmn: () => import("@/dictionaries/cmn.json").then((module) => module.default),
	zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
	console.log({ locale });

	return dictionaries[locale]();
};
