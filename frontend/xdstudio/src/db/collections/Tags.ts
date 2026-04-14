import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
    hidden: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
  ],
};
