import type { CollectionConfig } from "payload";

export const Stocks: CollectionConfig = {
  slug: "stocks",
  admin: {
    useAsTitle: "type",
    hidden: true,
  },
  timestamps: true,
  hooks: {
    beforeChange: [
      async ({ data }) => {
        data.updatedAt = new Date().toISOString();
        return data;
      },
    ],
  },
  fields: [
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Limit by available stock", value: "by_stock" },
        { label: "One item per user", value: "one_per_user" },
      ],
      defaultValue: "by_stock",
      required: true,
      admin: {
        description:
          "Defines how this product's stock is managed: limit by stock quantity or allow only one purchase per user.",
      },
    },
    {
      name: "quantity",
      type: "number",
      required: true,
      min: 0,
      admin: {
        description:
          'Specifies how many units are available. Used only when type is "Limit by available stock".',
      },
    },
  ],
};
