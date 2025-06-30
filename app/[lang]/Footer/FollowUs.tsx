import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/types/dictionnary.type";

export function FollowUs({ dict }: { dict: Dictionary }) {
	return (
		<div className="space-y-4 text-center border-t border-gray-400 pt-8">
			<div>
				<h4 className="text-lg font-semibold mb-4">{dict.footer.followUs}</h4>
				<div className="flex items-center gap-4 justify-center">
					<Link
						className="text-gray-500 hover:text-gray-600"
						href="https://x.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt="X Twitter"
							className="invert"
							height={28}
							src="/icons/x.svg"
							width={28}
						/>
					</Link>
					<Link
						className="text-gray-500 hover:text-gray-600"
						href="https://facebook.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt="Facebook"
							className="invert"
							height={28}
							src="/icons/facebook.svg"
							width={28}
						/>
					</Link>
					<Link
						className="text-gray-500 hover:text-gray-600"
						href="https://instagram.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt="Instagram"
							className="invert"
							height={28}
							src="/icons/instagram.svg"
							width={28}
						/>
					</Link>
					<Link
						className="hover:text-gray-300"
						href="https://www.tiktok.com/@dimka.abadeen?_t=ZG-8thSLfrYBVI&_r=1"
						target="_blank"
					>
						<Image
							alt="TikTok"
							className="invert"
							height={28}
							src="/icons/tiktok.svg"
							width={28}
						/>
					</Link>
					<Link
						className="hover:text-gray-300"
						href="https://www.xiaohongshu.com/explore"
						target="_blank"
					>
						<div className="w-[28px] h-[28px] bg-white rounded-sm flex items-center justify-center">
							<Image
								alt="RedNote"
								className="object-contain"
								height={12}
								src="/images/Rednote.jpg"
								width={20}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
