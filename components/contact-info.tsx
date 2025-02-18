import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ContactInfoProps {
	email: string;
	phone: string;
	classIcon?: string;
}

const ContactInfo = ({ email, phone, classIcon = "" }: ContactInfoProps) => {
	return (
		<div className="flex items-center gap-4">
			<Link
				href={`mailto:${email}`}
				className="flex flex-col items-center hover:text-primary transition-colors"
			>
				<Image
					src="/icons/email.svg"
					className={cn(classIcon)}
					alt="Email"
					width={24}
					height={24}
				/>
				<span className="text-xs mt-1">Email</span>
			</Link>
			<Link
				href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
				className="flex flex-col items-center hover:text-primary transition-colors"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src="/icons/whatsapp.svg"
					className={cn(classIcon)}
					alt="WhatsApp"
					width={24}
					height={24}
				/>
				<span className="text-xs mt-1">WhatsApp</span>
			</Link>
			<Link
				href={`https://t.me/${phone.replace(/[^0-9]/g, "")}`}
				className="flex flex-col items-center hover:text-primary transition-colors"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src="/icons/telegram.svg"
					className={cn(classIcon)}
					alt="Telegram"
					width={24}
					height={24}
				/>
				<span className="text-xs mt-1">Telegram</span>
			</Link>
			<Link
				href={`signal://send?phone=${phone.replace(/[^0-9]/g, "")}`}
				className="flex flex-col items-center hover:text-primary transition-colors"
			>
				<Image
					src="/icons/signal.svg"
					className={cn(classIcon)}
					alt="Signal"
					width={24}
					height={24}
				/>
				<span className="text-xs mt-1">Signal</span>
			</Link>
			<Link
				href={`tel:${phone}`}
				className="flex flex-col items-center hover:text-primary transition-colors"
			>
				<Image
					src="/icons/phone.svg"
					className={cn(classIcon)}
					alt="Phone"
					width={24}
					height={24}
				/>
				<span className="text-xs mt-1">Phone</span>
			</Link>
		</div>
	);
};

export default ContactInfo;
