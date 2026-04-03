import type { CollectionConfig } from "payload";

export const OrderItems: CollectionConfig = {
  slug: "order-items",
  admin: {
    useAsTitle: "id",
    hidden: true,
  },
  fields: [
    {
      name: "order",
      type: "relationship",
      relationTo: "orders",
      hasMany: false,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
    },
    {
      name: "userItem",
      type: "relationship",
      relationTo: "user-items",
      hasMany: false,
    },
    {
      name: "unitPrice",
      type: "number",
    },
    {
      name: "updatedAt",
      type: "date",
    },
  ],
};
