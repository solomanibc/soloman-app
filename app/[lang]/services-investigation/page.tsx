import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	AlertCircle,
	Building2,
	ChevronRight,
	Eye,
	FileText,
	Lock,
	Scale,
	Search,
	Shield,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvestigationServices() {
	return (
		<div className="min-h-screen">
			<Hero
				title="Investigation Services"
				description="Professional due diligence and investigation services to protect your business interests"
				image="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
			>
				<div className="flex gap-4">
					<Link href="/services/corporate">
						<Button
							variant="outline"
							className="text-black border-white hover:bg-white/70"
						>
							<Building2 className="mr-2 h-4 w-4" />
							Corporate Services
						</Button>
					</Link>
					<Link href="/services/individual">
						<Button
							variant="outline"
							className="text-black border-white hover:bg-white/70"
						>
							<Users className="mr-2 h-4 w-4" />
							Individual Services
						</Button>
					</Link>
				</div>
			</Hero>

			{/* Main Content */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					{/* Related Services */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold mb-8 text-center">
							Comprehensive Service Solutions
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Link href="/services-investigation/corporate">
								<Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									<CardContent className="p-6">
										<div className="flex items-center justify-between mb-4">
											<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-primary">
												<Building2 className="h-6 w-6" />
											</div>
											<ChevronRight className="h-5 w-5 text-primary" />
										</div>
										<h3 className="text-xl font-semibold mb-2">
											Corporate Services
										</h3>
										<p className="text-gray-600">
											Comprehensive corporate solutions including company
											formation, compliance, and business support
										</p>
									</CardContent>
								</Card>
							</Link>
							<Link href="/services-investigation/individual">
								<Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									<CardContent className="p-6">
										<div className="flex items-center justify-between mb-4">
											<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-primary">
												<Users className="h-6 w-6" />
											</div>
											<ChevronRight className="h-5 w-5 text-primary" />
										</div>
										<h3 className="text-xl font-semibold mb-2">
											Individual Services
										</h3>
										<p className="text-gray-600">
											Personalized solutions for individuals including banking,
											investment, and legal services
										</p>
									</CardContent>
								</Card>
							</Link>
						</div>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
						<ServiceCard
							icon={<Search />}
							title="Due Diligence"
							description="Comprehensive background checks and verification for business partnerships and investments"
						/>
						<ServiceCard
							icon={<Shield />}
							title="Fraud Investigation"
							description="Professional investigation of suspected fraudulent activities and financial misconduct"
						/>
						<ServiceCard
							icon={<FileText />}
							title="Document Verification"
							description="Authentication and verification of business documents and credentials"
						/>
						<ServiceCard
							icon={<Eye />}
							title="Market Intelligence"
							description="In-depth research and analysis of market competitors and industry trends"
						/>
						<ServiceCard
							icon={<Scale />}
							title="Compliance Checks"
							description="Thorough investigation of regulatory compliance and legal standing"
						/>
						<ServiceCard
							icon={<AlertCircle />}
							title="Risk Assessment"
							description="Comprehensive evaluation of business risks and potential vulnerabilities"
						/>
					</div>

					{/* Process Section */}
					<div className="bg-gray-50 rounded-2xl p-12 mb-20">
						<h3 className="text-2xl font-bold mb-8 text-center">
							Our Investigation Process
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<ProcessStep
								number="01"
								title="Initial Consultation"
								description="Understand your specific investigation needs and objectives"
							/>
							<ProcessStep
								number="02"
								title="Investigation Planning"
								description="Develop a comprehensive strategy and methodology"
							/>
							<ProcessStep
								number="03"
								title="Data Collection"
								description="Gather and analyze relevant information and evidence"
							/>
							<ProcessStep
								number="04"
								title="Detailed Reporting"
								description="Provide comprehensive findings and recommendations"
							/>
						</div>
					</div>

					{/* Features Section */}
					<div className="mb-20">
						<div className="max-w-3xl mx-auto">
							<h3 className="text-2xl font-bold mb-8 text-center">
								Why Choose Our Investigation Services
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FeaturePoint text="Licensed and certified investigators" />
								<FeaturePoint text="Strict confidentiality protocols" />
								<FeaturePoint text="Advanced investigation techniques" />
								<FeaturePoint text="Global investigation network" />
								<FeaturePoint text="Detailed documentation and reporting" />
								<FeaturePoint text="Compliance with legal requirements" />
							</div>
						</div>
					</div>

					{/* Case Studies Section */}
					<div className="mb-20">
						<h3 className="text-2xl font-bold mb-8 text-center">
							Case Studies
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<CaseStudyCard
								image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								title="Corporate Fraud Investigation"
								description="Successfully uncovered and documented systematic fraud in a multinational corporation"
							/>
							<CaseStudyCard
								image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								title="Due Diligence Success"
								description="Comprehensive due diligence revealed crucial information for a major acquisition"
							/>
							<CaseStudyCard
								image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
								title="Asset Investigation"
								description="Located and documented hidden assets in a complex international case"
							/>
						</div>
					</div>

					<CTA />
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

function ProcessStep({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className="text-center">
			<div className="w-12 h-12 bg-gray-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
				{number}
			</div>
			<h4 className="text-xl font-semibold mb-2">{title}</h4>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}

function FeaturePoint({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3">
			<Lock className="text-primary h-6 w-6 flex-shrink-0" />
			<span className="text-gray-700">{text}</span>
		</div>
	);
}

function CaseStudyCard({
	image,
	title,
	description,
}: {
	image: string;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-none shadow-lg overflow-hidden">
			<div className="relative h-48">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>
			<CardContent className="p-6">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}
