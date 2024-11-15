import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle, Globe } from "lucide-react";

export default function BusinessConsultation() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<Hero
				title="Business Consultation"
				description="Expert consultation services for UK, Hong Kong, and Global markets"
				image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
				height="small"
			/>

			{/* Market Categories */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					{/* UK Market */}
					<MarketSection
						title="UK Market"
						icon={<Building2 className="h-8 w-8" />}
						services={[
							{
								id: "franchise-vape-retail-store",
								title: "Franchise Vape Retail Store",
								description:
									"Complete franchise solutions for vape retail businesses in the UK market",
							},
							{
								id: "importing-from-china",
								title: "Importing from China",
								description: "Import facilitation and supply chain management",
							},
							{
								id: "sourcing-services",
								title: "Sourcing Services",
								description: "Product sourcing and supplier verification",
							},
							{
								id: "general-enquiry",
								title: "General Enquiry",
								description: "Other UK market-related consultations",
							},
						]}
					/>

					{/* Hong Kong Market */}
					<MarketSection
						title="Hong Kong Market"
						icon={<Globe className="h-8 w-8" />}
						services={[
							{
								id: "sourcing-importing-from-china",
								title: "Sourcing & Importing from China",
								description: "Comprehensive sourcing and import solutions",
							},
							{
								id: "buying-existing-company-with-license",
								title: "Buying Existing Company with License",
								description: "Company acquisition and licensing consultation",
							},
							{
								id: "general-enquiry",
								title: "General Enquiry",
								description: "Other Hong Kong market-related consultations",
							},
						]}
					/>

					{/* Global Market */}
					<MarketSection
						title="Global Market"
						icon={<Globe className="h-8 w-8" />}
						services={[
							{
								id: "raw-material-sourcing",
								title: "Raw Material Sourcing",
								description: "Global raw material procurement services",
							},
							{
								id: "gem-stone-precious-metal-sourcing",
								title: "Gem Stone & Precious Metal Sourcing",
								description: "Precious materials sourcing and verification",
							},
							{
								id: "oil-gas-sourcing",
								title: "Oil & Gas Sourcing",
								description: "Energy sector sourcing and consultation",
							},
							{
								id: "general-enquiry",
								title: "General Enquiry",
								description: "Other global market-related consultations",
							},
						]}
					/>

					<CTA />
				</div>
			</section>
		</div>
	);
}

interface MarketSectionProps {
	title: string;
	icon: React.ReactNode;
	services: {
		id: string;
		title: string;
		description: string;
	}[];
}

function MarketSection({ title, icon, services }: MarketSectionProps) {
	return (
		<div className="mb-16">
			<div className="flex items-center gap-4 mb-8">
				<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
					{icon}
				</div>
				<h2 className="text-3xl font-bold">{title}</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{services.map((service) => (
					<Card
						key={service.id}
						className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<CardContent className="p-6">
							<div className="flex items-start gap-4">
								<div className="mt-1">
									<CheckCircle className="h-5 w-5 text-blue-600" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										{service.title}
									</h3>
									<p className="text-gray-600">{service.description}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
