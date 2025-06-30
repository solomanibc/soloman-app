import type {
	CalloutBlockObjectResponse,
	TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { Alert, AlertDescription } from "../ui/alert";
import { Text } from "./Text";

export const Callout = ({
	callout,
}: {
	callout: CalloutBlockObjectResponse;
}) => {
	return (
		<Alert>
			{callout.callout.icon?.type === "emoji" && (
				<span>{callout.callout.icon.emoji}</span>
			)}
			<AlertDescription>
				{callout.callout.rich_text.map((text) => (
					<Text key={text.plain_text} text={text as TextRichTextItemResponse} />
				))}
			</AlertDescription>
		</Alert>
	);
};
