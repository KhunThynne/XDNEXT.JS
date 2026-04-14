import type { CollectionConfig } from "payload";

export const Prices: CollectionConfig = {
  slug: "prices",
  admin: {
    useAsTitle: "price_type",
    hidden: true,
  },
  timestamps: true,
  fields: [
    {
      name: "price",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "price_type",
      type: "select",
      options: [
        { label: "Retail", value: "retail" },
        { label: "Wholesale", value: "wholesale" },
        { label: "Base", value: "base" },
      ],
      defaultValue: "retail",
      admin: {
        description:
          "Retail: standard customer price\nWholesale: discounted for bulk buyers\nBase: cost before markup",
      },
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
