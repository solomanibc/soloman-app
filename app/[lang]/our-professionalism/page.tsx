import { CTA } from "@/components/cta";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Globe2, Scale, Shield, Users } from "lucide-react";
import Image from "next/image";

export default function OurProfessionalism() {
	return (
		<div className="min-h-screen pb-10">
			{/* Hero Section */}
			<section className="relative h-[60vh] bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/60" />
				<div className="relative container mx-auto px-4 h-full flex items-center">
					<div className="max-w-2xl text-white">
						<h1 className="text-5xl font-bold mb-6">Our Professionalism</h1>
						<p className="text-xl text-gray-200">
							Committed to excellence in corporate and business services with
							the highest standards of professionalism
						</p>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-6">Professional Standards</h2>
						<p className="text-lg text-gray-600">
							Our commitment to professionalism is reflected in every aspect of
							our service delivery and client interactions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
						<ValueCard
							icon={<Shield className="w-8 h-8" />}
							title="Integrity"
							description="We maintain the highest standards of integrity in all our business dealings and professional relationships"
						/>
						<ValueCard
							icon={<Award className="w-8 h-8" />}
							title="Excellence"
							description="Commitment to delivering excellence through continuous improvement and professional development"
						/>
						<ValueCard
							icon={<Users className="w-8 h-8" />}
							title="Client Focus"
							description="Dedicated to understanding and meeting our clients' unique needs with tailored solutions"
						/>
						<ValueCard
							icon={<BookOpen className="w-8 h-8" />}
							title="Expertise"
							description="Deep industry knowledge and expertise across various business sectors and jurisdictions"
						/>
						<ValueCard
							icon={<Scale className="w-8 h-8" />}
							title="Compliance"
							description="Strict adherence to regulatory requirements and professional standards"
						/>
						<ValueCard
							icon={<Globe2 className="w-8 h-8" />}
							title="Global Perspective"
							description="International expertise with local insights for comprehensive business solutions"
						/>
					</div>
				</div>
			</section>

			{/* Professional Team */}
			<section className="bg-gray-50 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-6">Our Professional Team</h2>
						<p className="text-lg text-gray-600">
							Led by experienced professionals with diverse expertise in
							corporate services, legal compliance, and international business
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<TeamMemberCard
							image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							name="David Chen"
							position="Managing Director"
							description="Over 20 years of experience in corporate services and international business consulting"
						/>
						<TeamMemberCard
							image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							name="Sarah Wong"
							position="Head of Legal Services"
							description="Specialized in corporate law and regulatory compliance with extensive experience in Asia-Pacific markets"
						/>
						<TeamMemberCard
							image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
							name="Michael Zhang"
							position="Director of Corporate Services"
							description="Expert in business formation and corporate structuring across multiple jurisdictions"
						/>
					</div>
				</div>
			</section>

			{/* Professional Memberships */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold mb-6">
							Professional Memberships
						</h2>
						<p className="text-lg text-gray-600">
							We maintain active memberships in leading professional
							organizations to ensure the highest standards of service
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[1, 2, 3, 4].map((index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center"
							>
								<div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
									<span className="text-gray-500 font-semibold">
										Member Logo
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<CTA />
		</div>
	);
}

function ValueCard({
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
				<div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4 text-primary">
					{icon}
				</div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}

function TeamMemberCard({
	image,
	name,
	position,
	description,
}: {
	image: string;
	name: string;
	position: string;
	description: string;
}) {
	return (
		<Card className="border-none shadow-lg overflow-hidden">
			<div className="relative h-64">
				<Image src={image} alt={name} fill className="object-cover" />
			</div>
			<CardContent className="p-6">
				<h3 className="text-xl font-semibold mb-1">{name}</h3>
				<p className="text-primary font-medium mb-3">{position}</p>
				<p className="text-gray-600">{description}</p>
			</CardContent>
		</Card>
	);
}
