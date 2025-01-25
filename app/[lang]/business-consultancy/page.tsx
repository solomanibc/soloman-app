import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Building, Building2, Globe } from "lucide-react";
import { type Locale, getDictionary } from "../dictionaries";
import { MarketSection } from "./market-section";

export default async function BusinessConsultation({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	if (!dict) return null;

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<Hero
				title={dict.businessConsultancy.title}
				description={dict.businessConsultancy.description}
				image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
				height="small"
			/>

			{/* Market Categories */}
			<section className="pt-20">
				<div className="container mx-auto px-4">
					{/* UK Market */}
					<MarketSection
						title={dict.businessConsultancy.ukMarket.title}
						icon={<Building2 className="h-8 w-8" />}
						services={dict.businessConsultancy.ukMarket.services}
					/>

					{/* Hong Kong Market */}
					<MarketSection
						title={dict.businessConsultancy.hkMarket.title}
						icon={<Building className="h-8 w-8" />}
						services={dict.businessConsultancy.hkMarket.services}
					/>

					{/* Global Market */}
					<MarketSection
						title={dict.businessConsultancy.globalMarket.title}
						icon={<Globe className="h-8 w-8" />}
						services={dict.businessConsultancy.globalMarket.services}
					/>
				</div>
			</section>
			<CTA dict={dict} />
		</div>
	);
}
