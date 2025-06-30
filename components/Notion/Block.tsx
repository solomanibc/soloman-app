import type {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { BulletedListItem } from "./bulleted-list-item";
import { Callout } from "./callout";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { ImageBlock } from "./ImageBlock";
import { NumberedListItem } from "./NumberedListItem";
import { Paragraph } from "./Paragraph";

export const Block = ({ block }: { block: BlockObjectResponse }) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph paragraph={block as ParagraphBlockObjectResponse} />;

    case "heading_1":
      return <Heading1 heading={block as Heading1BlockObjectResponse} />;

    case "heading_2":
      return <Heading2 heading={block as Heading2BlockObjectResponse} />;

    case "heading_3":
      return <Heading3 heading={block as Heading3BlockObjectResponse} />;

    case "bulleted_list_item":
      return (
        <BulletedListItem
          bulletedListItem={block as BulletedListItemBlockObjectResponse}
        />
      );
    case "numbered_list_item":
      return (
        <NumberedListItem
          numberedListItem={block as NumberedListItemBlockObjectResponse}
        />
      );

    case "callout":
      return <Callout callout={block as CalloutBlockObjectResponse} />;

    case "image":
      return <ImageBlock image={block as ImageBlockObjectResponse} />;

    default:
      console.error({ block });
      break;
  }
};
