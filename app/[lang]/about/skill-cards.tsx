import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Globe2, Shield, Users } from "lucide-react";

export const SkillCards = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
	);
};
