import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ContactInfoProps {
	email: string;
	phone: string;
	classIcon?: string;
}

const ContactInfo = ({ classIcon = "", email, phone }: ContactInfoProps) => {
	return (
		<div className="flex items-center gap-4">
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href={`mailto:${email}`}
			>
				<Image
					alt="Email"
					className={cn(classIcon)}
					height={24}
					src="/icons/email.svg"
					width={24}
				/>
				<span className="text-xs mt-1">Email</span>
			</Link>
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image
					alt="WhatsApp"
					className={cn(classIcon)}
					height={24}
					src="/icons/whatsapp.svg"
					width={24}
				/>
				<span className="text-xs mt-1">WhatsApp</span>
			</Link>
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href={`https://t.me/${phone.replace(/[^0-9]/g, "")}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image
					alt="Telegram"
					className={cn(classIcon)}
					height={24}
					src="/icons/telegram.svg"
					width={24}
				/>
				<span className="text-xs mt-1">Telegram</span>
			</Link>
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href={`signal://send?phone=${phone.replace(/[^0-9]/g, "")}`}
			>
				<Image
					alt="Signal"
					className={cn(classIcon)}
					height={24}
					src="/icons/signal.svg"
					width={24}
				/>
				<span className="text-xs mt-1">Signal</span>
			</Link>
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href={`tel:${phone}`}
			>
				<Image
					alt="Phone"
					className={cn(classIcon)}
					height={24}
					src="/icons/phone.svg"
					width={24}
				/>
				<span className="text-xs mt-1">Phone</span>
			</Link>
			<Link
				className="flex flex-col items-center hover:text-primary transition-colors"
				href="https://web.wechat.com/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Image
					alt="WeChat"
					className={cn(classIcon)}
					height={24}
					src="/icons/wechat.svg"
					width={24}
				/>
				<span className="text-xs mt-1">WeChat</span>
			</Link>
		</div>
	);
};

export default ContactInfo;
