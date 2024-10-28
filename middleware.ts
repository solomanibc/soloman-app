import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";

const headers = { "accept-language": "en,cmn,zh;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = ["en", "cmn", "zh"];
const defaultLocale = "en";

match(languages, locales, defaultLocale); // -> 'en-US'

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	// Redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next|images|favicon.ico|icons).*)",
		// Optional: only run on root (/) URL
		// "/"
	],
};
