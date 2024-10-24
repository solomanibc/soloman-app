import { type LocaleParams, getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default async function ContactForm({ lang }: LocaleParams) {
	const dict = await getDictionary(lang);

	return (
		<section className="container mx-auto px-4 py-20">
			<h2 className="text-3xl font-bold text-center mb-12">
				{dict.contact.title}
			</h2>
			<div className="max-w-md mx-auto">
				<form className="space-y-6">
					<Input placeholder={dict.contact.namePlaceholder} />
					<Input type="email" placeholder={dict.contact.emailPlaceholder} />
					<Textarea placeholder={dict.contact.messagePlaceholder} />
					<Button type="submit" className="w-full">
						{dict.contact.submit}
					</Button>
				</form>
			</div>
		</section>
	);
}
