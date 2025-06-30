import type { Dictionary } from "@/types/dictionnary.type";

import "server-only";

export type Locale = "en" | "zh" | "cmn";
export interface LocaleParams {
	lang: Locale;
}

const dictionaries = {
	en: (): Promise<Dictionary> =>
		import("@/dictionaries/en.json").then((module) => module.default),
	cmn: (): Promise<Dictionary> =>
		import("@/dictionaries/cmn.json").then((module) => module.default),
	zh: (): Promise<Dictionary> =>
		import("@/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
	dictionaries[locale]();
