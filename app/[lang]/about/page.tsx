import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Globe2, Shield, Users } from "lucide-react";
import Image from "next/image";
import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";

export default async function About({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="container mx-auto px-4 py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl font-bold mb-6">{dict.about.title}</h2>
					<p className="text-lg text-gray-600">
						With over 20 years of experience, we provide comprehensive business
						solutions and professional services to help companies establish and
						expand their presence in the global market.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<Card className="border-none shadow-lg">
						<CardContent className="p-6 text-center">
							<Globe2 className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-semibold mb-2">Global Reach</h3>
							<p className="text-gray-600">
								Operating across multiple jurisdictions worldwide
							</p>
						</CardContent>
					</Card>

					<Card className="border-none shadow-lg">
						<CardContent className="p-6 text-center">
							<Users className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-semibold mb-2">Expert Team</h3>
							<p className="text-gray-600">
								Professional staff with extensive experience
							</p>
						</CardContent>
					</Card>

					<Card className="border-none shadow-lg">
						<CardContent className="p-6 text-center">
							<BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
							<p className="text-gray-600">
								Strategic solutions for business expansion
							</p>
						</CardContent>
					</Card>

					<Card className="border-none shadow-lg">
						<CardContent className="p-6 text-center">
							<Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h3 className="text-xl font-semibold mb-2">Compliance</h3>
							<p className="text-gray-600">
								Ensuring regulatory compliance across borders
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center mt-12">
				<div className="md:w-1/2 mb-8 md:mb-0">
					<Image
						src="/images/about-soloman.jpg"
						alt="Soloman IBC Office"
						width={600}
						height={400}
						className="rounded-lg shadow-lg"
					/>
				</div>
				<div className="md:w-1/2 md:pl-8">
					<p className="text-lg text-gray-600 mb-6">{dict.about.block1}</p>
					<p className="text-lg text-gray-600">{dict.about.block2}</p>
				</div>
			</div>
		</div>
	);
}
