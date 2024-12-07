import type { Locale } from "@/app/[lang]/dictionaries";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Building2,
	CheckCircle,
	FileText,
	Globe2,
	Scale,
	Shield,
	Users,
} from "lucide-react";

export default async function Corporate({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-[60vh] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/60" />
				<div className="relative container mx-auto px-4 h-full flex items-center">
					<div className="max-w-2xl text-white">
						<h1 className="text-5xl font-bold mb-6">
							{dict.corporate.hero.title}
						</h1>
						<p className="text-xl text-gray-200">
							{dict.corporate.hero.description}
						</p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					{/* Overview */}
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-6">
							{dict.corporate.overview.title}
						</h2>
						<p className="text-lg text-gray-600">
							{dict.corporate.overview.description}
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
						<ServiceCard
							icon={<Building2 />}
							title={dict.corporate.services.companyFormation.title}
							description={dict.corporate.services.companyFormation.description}
						/>
						<ServiceCard
							icon={<FileText />}
							title={dict.corporate.services.companySecretary.title}
							description={dict.corporate.services.companySecretary.description}
						/>
						<ServiceCard
							icon={<Shield />}
							title={dict.corporate.services.compliance.title}
							description={dict.corporate.services.compliance.description}
						/>
						<ServiceCard
							icon={<Globe2 />}
							title={dict.corporate.services.registeredOffice.title}
							description={dict.corporate.services.registeredOffice.description}
						/>
						<ServiceCard
							icon={<Scale />}
							title={dict.corporate.services.legalSupport.title}
							description={dict.corporate.services.legalSupport.description}
						/>
						<ServiceCard
							icon={<Users />}
							title={dict.corporate.services.directorServices.title}
							description={dict.corporate.services.directorServices.description}
						/>
					</div>

					{/* Features Section */}
					<div className="bg-gray-50 rounded-2xl p-12 mb-20">
						<div className="max-w-3xl mx-auto">
							<h3 className="text-2xl font-bold mb-8 text-center">
								{dict.corporate.features.title}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FeaturePoint text={dict.corporate.features.points[0]} />
								<FeaturePoint text={dict.corporate.features.points[1]} />
								<FeaturePoint text={dict.corporate.features.points[2]} />
								<FeaturePoint text={dict.corporate.features.points[3]} />
								<FeaturePoint text={dict.corporate.features.points[4]} />
								<FeaturePoint text={dict.corporate.features.points[5]} />
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-6">
							{dict.corporate.cta.title}
						</h3>
						<p className="text-lg text-gray-600 mb-8">
							{dict.corporate.cta.description}
						</p>
						<Button size="lg" className="bg-primary hover:bg-primary/80">
							{dict.corporate.cta.button}
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

function ServiceCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
			<CardContent className="p-6">
				<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 text-primary">
					{icon}
				</div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}

function FeaturePoint({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3">
			<CheckCircle className="text-primary h-6 w-6 flex-shrink-0" />
			<span className="text-gray-700">{text}</span>
		</div>
	);
}
