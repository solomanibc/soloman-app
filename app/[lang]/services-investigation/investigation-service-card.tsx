import type { ReactElement } from "react";

import { 	Baby,
	Briefcase,
	Building2,
ChevronRight ,
	Eye,
	FileCheck,
	Heart,
	HeartHandshake,
	Home,
	MapPin,
	ShoppingBag,
	UserCheck,
	Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface InvestigationServiceProps {
	title: string;
	items: string[];
}

const iconMap: Record<string, ReactElement> = {
	"Company Background": <Building2 />,
	"Property Investigation": <Home />,
	"Background Investigation": <Users />,
	"Asset Investigation": <Briefcase />,
	"Mystery Shopping": <ShoppingBag />,
	"Marriage Record": <HeartHandshake />,
	"Person and Address": <MapPin />,
	"Partner Activities": <Eye />,
	"Children Activities": <Baby />,
	"Online Dating": <Heart />,
	"Life and Death Records": <FileCheck />,
	"Bankruptcy Records": <UserCheck />,
	// Add translations
	公司背景: <Building2 />,
	物業調查: <Home />,
	背景調查: <Users />,
	資產調查: <Briefcase />,
	神秘顧客: <ShoppingBag />,
	婚姻記錄: <HeartHandshake />,
	尋人及地址調查: <MapPin />,
	伴侶動向: <Eye />,
	子女動向: <Baby />,
	網戀對象背景調查: <Heart />,
	生死記錄: <FileCheck />,
	破產記錄: <UserCheck />,
};

export const InvestigationServiceCard = ({
	items,
	title,
}: InvestigationServiceProps) => {
	const icon = iconMap[title] || <Building2 />;

	return (
		<Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
			<CardContent className="p-6">
				<div className="flex items-center gap-4 mb-4">
					<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
						{icon}
					</div>
					<h3 className="text-xl font-semibold">{title}</h3>
				</div>
				<ul className="space-y-2">
					{items.map((item) => (
						<li key={item} className="flex items-start gap-2">
							<ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
							<span className="text-gray-700">{item}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};
