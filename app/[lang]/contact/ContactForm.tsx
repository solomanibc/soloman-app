import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function ContactForm({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<div id="contact-form" className="py-10">
			<form className="space-y-6">
				<Input placeholder={dict.contact.namePlaceholder} />
				<Input type="email" placeholder={dict.contact.emailPlaceholder} />
				<Textarea placeholder={dict.contact.messagePlaceholder} />
				<Button type="submit" className="w-full bg-primary hover:bg-primary/80">
					{dict.contact.submit}
				</Button>
			</form>
		</div>
	);
}
