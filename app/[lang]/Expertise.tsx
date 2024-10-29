import { Section } from "@/components/Section";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "./dictionaries";
import { getDictionary } from "./dictionaries";

export default async function Expertise({ lang }: { lang: Locale }) {
	const dict = await getDictionary(lang);

	return (
		<Section>
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					<div className="lg:w-1/2">
						<Image
							src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
							alt={dict.expertise.imageAlt}
							width={600}
							height={400}
							className="rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-bold mb-6">{dict.expertise.title}</h2>
						<p className="text-lg text-gray-600 mb-8">
							{dict.expertise.description}
						</p>
						<div className="space-y-4">
							<ExpertisePoint text={dict.expertise.points[0]} />
							<ExpertisePoint text={dict.expertise.points[1]} />
							<ExpertisePoint text={dict.expertise.points[2]} />
							<ExpertisePoint text={dict.expertise.points[3]} />
							<ExpertisePoint text={dict.expertise.points[4]} />
						</div>
						<div className="mt-8">
							<Link
								href={`/${lang}/our-professionalism`}
								className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

function ExpertisePoint({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3">
			<CheckCircle className="text-blue-600 h-6 w-6 flex-shrink-0" />
			<span className="text-gray-700">{text}</span>
		</div>
	);
}
