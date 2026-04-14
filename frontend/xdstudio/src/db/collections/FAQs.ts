import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  admin: {
    useAsTitle: "question",
    hidden: true,
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      editor: lexicalEditor(),
    },
  ],
};
