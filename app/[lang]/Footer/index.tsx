import { Section } from "@/components/Section";
import Image from "next/image";
import { type LocaleParams, getDictionary } from "../dictionaries";
import { Contact } from "./Contact";
import { FollowUs } from "./FollowUs";
import { Partnership } from "./Partnership";
import { QuickLinks } from "./QuickLinks";

export default async function Footer({ lang }: LocaleParams) {
  const dict = await getDictionary(lang);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
              Soloman <span className="text-primary">IBC</span>
            </h3>
            <p>{dict.footer.description}</p>
          </div>
          <QuickLinks dict={dict} lang={lang} />
          <Partnership dict={dict} />
          <Contact dict={dict} />
        </div>
        <FollowUs dict={dict} />
        <div className="mt-12 text-center border-t border-gray-400 pt-8">
          <p>{dict.footer.copyright}</p>
        </div>
      </Section>
    </footer>
  );
}
