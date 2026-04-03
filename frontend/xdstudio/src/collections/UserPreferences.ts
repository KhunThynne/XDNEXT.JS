import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const UserPreferences: CollectionConfig = {
  slug: "user-preferences",
  admin: {
    useAsTitle: "id",
    hidden: true,
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
    },
    {
      name: "setting",
      type: "richText",
      editor: lexicalEditor(),
    },
  ],
};
