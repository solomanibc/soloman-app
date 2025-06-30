import type { Dictionary } from "@/types/dictionnary.type";
import Link from "next/link";

export function QuickLinks({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{dict.footer.quickLinks}</h4>
      <ul className="space-y-2">
        <li>
          <Link href={`/${lang}`} className="hover:underline">
            {dict.nav.home}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/about`} className="hover:underline">
            {dict.nav.about}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/services-investigation`}
            className="hover:underline"
          >
            {dict.nav.servicesInvestigation}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/business-consultancy`}
            className="hover:underline"
          >
            {dict.nav.businessConsultancy}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/blog`} className="hover:underline">
            {dict.nav.blog}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/media`} className="hover:underline">
            {dict.nav.media}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/contact`} className="hover:underline">
            {dict.nav.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
}
