import { getDictionary,type Locale } from "@/app/[lang]/dictionaries";
import { Hero } from "@/components/hero";

import { InvestigationContent } from "./investigation-content";

export default async function InvestigationServicesPage({
	params,
	searchParams,
}: {
	params: Promise<{ lang: Locale }>;
	searchParams: Promise<{ type?: "corporate" | "personal" | undefined }>;
}) {
	const { lang } = await params;
	const { type } = await searchParams;
	const dict = await getDictionary(lang);

	return (
		<div className="min-h-screen">
			<Hero
				description={dict.services_investigation.description}
				image="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
				title={dict.services_investigation.title}
			/>

			{/* Main Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<InvestigationContent dict={dict} type={type} />
				</div>
				<div className="container mx-auto my-12 px-8">
					{dict.services_investigation.conclusion}
				</div>
			</section>
		</div>
	);
}
