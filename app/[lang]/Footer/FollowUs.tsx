import type { Dictionary } from "@/types/dictionnary.type";
import Image from "next/image";
import Link from "next/link";

export function FollowUs({ dict }: { dict: Dictionary }) {
  return (
    <div className="space-y-4 text-center border-t border-gray-400 pt-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">{dict.footer.followUs}</h4>
        <div className="flex items-center gap-4 justify-center">
          <Link
            href="https://x.com"
            className="text-gray-500 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/x.svg"
              className="invert"
              alt="X Twitter"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://facebook.com"
            className="text-gray-500 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.svg"
              className="invert"
              alt="Facebook"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-500 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              className="invert"
              alt="Instagram"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@dimka.abadeen?_t=ZG-8thSLfrYBVI&_r=1"
            className="hover:text-gray-300"
            target="_blank"
          >
            <Image
              src="/icons/tiktok.svg"
              className="invert"
              alt="TikTok"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.xiaohongshu.com/explore"
            className="hover:text-gray-300"
            target="_blank"
          >
            <div className="w-[28px] h-[28px] bg-white rounded-sm flex items-center justify-center">
              <Image
                src="/images/Rednote.jpg"
                alt="RedNote"
                width={20}
                height={12}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
