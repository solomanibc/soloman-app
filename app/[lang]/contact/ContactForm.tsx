"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
	return (
		<div className="py-10" id="contact-form">
			<form className="space-y-6">
				<Input placeholder="Name" />
				<Input placeholder="Email" type="email" />
				<Textarea placeholder="Message" />
				<Button className="w-full bg-primary hover:bg-primary/80" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
