import "server-only";

export type Locale = "en" | "zh";
export interface LocaleParams {
	lang: Locale;
}

const dictionaries = {
	en: () => import("@/dictionaries/en.json").then((module) => module.default),
	zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDictionary = async (locale: keyof typeof dictionaries) =>
	dictionaries[locale]();
