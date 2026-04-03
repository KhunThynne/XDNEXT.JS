import type { CollectionConfig } from "payload";

export const Suppliers: CollectionConfig = {
  slug: "suppliers",
  admin: {
    useAsTitle: "name",
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
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      admin: {
        description: "Related products from this supplier.",
        condition: () => false,
      },
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
