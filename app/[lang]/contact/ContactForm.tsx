"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
	return (
		<div id="contact-form" className="py-10">
			<form className="space-y-6">
				<Input placeholder="Name" />
				<Input type="email" placeholder="Email" />
				<Textarea placeholder="Message" />
				<Button type="submit" className="w-full bg-primary hover:bg-primary/80">
					Submit
				</Button>
			</form>
		</div>
	);
}
