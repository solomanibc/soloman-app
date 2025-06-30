import { env } from "@/lib/env";
import type { Dictionary } from "@/types/dictionnary.type";
import Image from "next/image";
import Link from "next/link";

export function Partnership({ dict }: { dict: Dictionary }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{dict.footer.partnerships}</h4>
      <div className="flex items-center space-x-4 justify-center">
        {env.ENABLE_PARTNERSHIPS && (
          <Link href="https://www.pin.uk.com/" target="_blank">
            <Image
              src="/icons/pin-uk.png"
              alt="PIN UK Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </Link>
        )}

        <Link href="https://hk-pi.org.hk/" target="_blank">
          <Image
            src="/icons/hk-pi.webp"
            alt="HK PI Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
