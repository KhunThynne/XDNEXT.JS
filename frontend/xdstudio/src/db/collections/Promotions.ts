import type { CollectionConfig } from "payload";

export const Promotions: CollectionConfig = {
  slug: "promotions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "discountType", "discountValue", "publishedAt"],
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "discountType",
      type: "select",
      options: [
        { label: "Percent", value: "percent" },
        { label: "Fixed", value: "fixed" },
        { label: "Bogo", value: "bogo" },
      ],
      defaultValue: "percent",
    },
    {
      name: "discountValue",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "publishedAt",
      type: "date",
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
  ],
};
