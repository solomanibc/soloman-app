import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ImageLink from "next/image";

export const ImageBlock = ({ image }: { image: ImageBlockObjectResponse }) => {
	const src =
		"file" in image.image ? image.image.file.url : image.image.external.url;
	return (
		<ImageLink alt={src} className="mb-3" height={600} src={src} width={600} />
	);
};
