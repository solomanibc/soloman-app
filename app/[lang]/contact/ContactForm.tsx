import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function ContactForm({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<section id="contact-form" className="px-4 py-20">
			<div className="max-w-md mx-auto">
				<form className="space-y-6">
					<Input placeholder={dict.contact.namePlaceholder} />
					<Input type="email" placeholder={dict.contact.emailPlaceholder} />
					<Textarea placeholder={dict.contact.messagePlaceholder} />
					<Button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700"
					>
						{dict.contact.submit}
					</Button>
				</form>
			</div>
		</section>
	);
}
