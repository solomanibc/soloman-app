import { Building2, Mail, MapPin, Phone } from "lucide-react";

import ContactInfo from "@/components/contact-info";
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getDictionary,type Locale } from "../dictionaries";

export const ConcatInfo = async ({ lang }: { lang: Locale }) => {
	const dict = await getDictionary(lang);

	return (
		<Section className="mt-12">
			<div className="grid gap-8 lg:grid-cols-2">
				<Card className="relative overflow-hidden lg:row-span-2">
					<CardHeader className="pb-3">
						<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Building2 className="h-6 w-6 text-primary" />
						</div>
						<CardTitle>{dict.contact.visitUs}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<h3 className="font-medium text-sm">
										{dict.contact.registeredAddress.title}
									</h3>
								</div>
								<p className="pl-6 text-muted-foreground whitespace-pre-line">
									{dict.contact.registeredAddress.lines.join("\n")}
								</p>
							</div>

							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<h3 className="font-medium text-sm">
										{dict.contact.ukOffice.title}
									</h3>
								</div>
								<p className="pl-6 text-muted-foreground whitespace-pre-line">
									{dict.contact.ukOffice.lines.join("\n")}
								</p>
							</div>

							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<h3 className="font-medium text-sm">
										{dict.contact.hkOffice.title}
									</h3>
								</div>
								<p className="pl-6 text-muted-foreground whitespace-pre-line">
									{dict.contact.hkOffice.lines.join("\n")}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="relative overflow-hidden">
					<CardHeader className="pb-3">
						<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Phone className="h-6 w-6 text-primary" />
						</div>
						<CardTitle>{dict.contact.callUs}</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-xl font-medium">{dict.contact.phone}</p>
						<p className="text-sm text-muted-foreground mt-1">
							{dict.contact.companyName}
						</p>
						<div className="text-sm text-muted-foreground mt-4">
							<ContactInfo
								classIcon="text-blue-500"
								email={dict.contact.email}
								phone={dict.contact.phone}
							/>
						</div>
					</CardContent>
				</Card>

				<Card className="relative overflow-hidden">
					<CardHeader className="pb-3">
						<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
							<Mail className="h-6 w-6 text-primary" />
						</div>
						<CardTitle>{dict.contact.emailUs}</CardTitle>
					</CardHeader>
					<CardContent>
						<a
							className="text-xl font-medium hover:text-primary"
							href={`mailto:${dict.contact.email}`}
						>
							{dict.contact.email}
						</a>
						<p className="text-sm text-muted-foreground mt-1">
							{dict.contact.description}
						</p>
					</CardContent>
				</Card>
			</div>
		</Section>
	);
};
