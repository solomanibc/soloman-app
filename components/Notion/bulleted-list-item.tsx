import type {
	BulletedListItemBlockObjectResponse,
	TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

export const BulletedListItem = ({
	bulletedListItem,
}: {
	bulletedListItem: BulletedListItemBlockObjectResponse;
}) => {
	return (
		<li>
			{bulletedListItem.bulleted_list_item.rich_text.map((text) => (
				<Text key={text.plain_text} text={text as TextRichTextItemResponse} />
			))}
		</li>
	);
};
