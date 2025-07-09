import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/types/dictionnary.type";

export function Partnership({ dict }: { dict: Dictionary }) {
	return (
		<div>
			<h4 className="text-lg font-semibold mb-4">{dict.footer.partnerships}</h4>
			<div className="flex items-center space-x-4 justify-center">
				<Link href="https://www.ukpin.com/" target="_blank">
					<Image
						alt="UK PIN Logo"
						className="object-contain"
						height={40}
						src="/icons/uk-pin.png"
						width={80}
					/>
				</Link>

				<Link href="https://hk-pi.org.hk/" target="_blank">
					<Image
						alt="HK PI Logo"
						className="object-contain"
						height={40}
						src="/icons/hk-pi.webp"
						width={80}
					/>
				</Link>
			</div>
		</div>
	);
}
