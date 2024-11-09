import { Section } from "@/components/Section";
import type { Locale } from "../../dictionaries";
import { getDictionary } from "../../dictionaries";

export default async function page({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Section className="py-5">
        <h2 className="text-3xl font-bold text-center mb-12 mt-5">
          {dict.globalMarket.title}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {dict.globalMarket.description}
        </p>
      </Section>
    </>
  );
}
