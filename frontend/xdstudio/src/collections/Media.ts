import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "filename", "mimeType", "filesize"],
  },
  upload: true,
  hooks: {
    beforeOperation: [
      async ({ args, operation }) => {
        if (operation === "create" && args.data && !args.data.name) {
          // fallback: name will be set from filename via beforeChange
        }
        return args;
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "altText",
      type: "text",
    },
  ],
};
