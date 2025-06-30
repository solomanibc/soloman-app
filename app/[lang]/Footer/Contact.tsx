import ContactInfo from "@/components/contact-info";
import type { Dictionary } from "@/types/dictionnary.type";

export function Contact({ dict }: { dict: Dictionary }) {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.nav.contact}</h4>
			<div className="space-y-4">
				<div>
					<p className="font-medium">{dict.contact.companyName}</p>
				</div>
				<div>
					<p className="font-medium">{dict.contact.registeredAddress.title}</p>
					{dict.contact.registeredAddress.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div>
					<p className="font-medium">{dict.contact.ukOffice.title}</p>
					{dict.contact.ukOffice.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div>
					<p className="font-medium">{dict.contact.hkOffice.title}</p>
					{dict.contact.hkOffice.lines.map((line) => (
						<p key={line.replace(" ", "")} className="text-sm">
							{line}
						</p>
					))}
				</div>
				<div className="mt-4">
					<ContactInfo
						classIcon="invert"
						email={dict.contact.email}
						phone={dict.contact.phone}
					/>
				</div>
			</div>
		</div>
	);
}
