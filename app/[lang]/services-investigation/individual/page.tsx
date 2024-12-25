import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	CheckCircle,
	FileText,
	Globe2,
	Scale,
	ShieldCheck,
	UserPlus,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import { type Locale, getDictionary } from "../../dictionaries";

export default async function IndividualServices({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-[60vh] bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/60" />
				<div className="relative container mx-auto px-4 h-full flex items-center">
					<div className="max-w-2xl text-white">
						<h1 className="text-5xl font-bold mb-6">
							{dict.individual.hero.title}
						</h1>
						<p className="text-xl text-gray-200">
							{dict.individual.hero.description}
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
							{dict.individual.overview.title}
						</h2>
						<p className="text-lg text-gray-600">
							{dict.individual.overview.description}
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
						<ServiceCard
							icon={<UserPlus />}
							title={dict.individual.services.bankAccount.title}
							description={dict.individual.services.bankAccount.description}
						/>
						<ServiceCard
							icon={<Wallet />}
							title={dict.individual.services.investment.title}
							description={dict.individual.services.investment.description}
						/>
						<ServiceCard
							icon={<FileText />}
							title={dict.individual.services.taxPlanning.title}
							description={dict.individual.services.taxPlanning.description}
						/>
						<ServiceCard
							icon={<Globe2 />}
							title={dict.individual.services.immigration.title}
							description={dict.individual.services.immigration.description}
						/>
						<ServiceCard
							icon={<Scale />}
							title={dict.individual.services.legalServices.title}
							description={dict.individual.services.legalServices.description}
						/>
						<ServiceCard
							icon={<ShieldCheck />}
							title={dict.individual.services.insurance.title}
							description={dict.individual.services.insurance.description}
						/>
					</div>

					{/* Benefits Section */}
					<div className="bg-gray-50 rounded-2xl p-12 mb-20">
						<div className="max-w-3xl mx-auto">
							<h3 className="text-2xl font-bold mb-8 text-center">
								{dict.individual.benefits.title}
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{dict.individual.benefits.points.map((point) => (
									<BenefitPoint key={point} text={point} />
								))}
							</div>
						</div>
					</div>

					{/* Process Section */}
					<div className="max-w-4xl mx-auto mb-20">
						<h3 className="text-2xl font-bold mb-8 text-center">
							{dict.individual.process.title}
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{["1", "2", "3"].map((step: string) => (
								<div key={step} className="text-center">
									<div className="w-12 h-12 bg-priamry text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
										{step}
									</div>
									<h4 className="text-xl font-semibold mb-2">
										{
											dict.individual.process.steps[
												step as keyof typeof dict.individual.process.steps
											].title
										}
									</h4>
									<p className="text-gray-600">
										{
											dict.individual.process.steps[
												step as keyof typeof dict.individual.process.steps
											].description
										}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-6">
							{dict.individual.cta.title}
						</h3>
						<p className="text-lg text-gray-600 mb-8">
							{dict.individual.cta.description}
						</p>
						<Link
							href="https://cal.com/soloman-ibc-appointement/30min"
							target="_blank"
							className={cn(
								"bg-primary hover:bg-primary/80",
								buttonVariants({ variant: "default" }),
							)}
						>
							{dict.individual.cta.button}
						</Link>
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

function BenefitPoint({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3">
			<CheckCircle className="text-primary h-6 w-6 flex-shrink-0" />
			<span className="text-gray-700">{text}</span>
		</div>
	);
}
