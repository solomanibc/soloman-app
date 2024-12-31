import { type Locale, getDictionary } from "@/app/[lang]/dictionaries";
import { Hero } from "@/components/hero";
import { InvestigationContent } from "./investigation-content";

export default async function InvestigationServicesPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="min-h-screen">
			<Hero
				title={dict.services_investigation.title}
				description={dict.services_investigation.description}
				image="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
			/>

			{/* Main Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<InvestigationContent dict={dict} />
				</div>
				<div className="container mx-auto px-4">
					{dict.services_investigation.conclusion}
				</div>
			</section>
		</div>
	);
}
