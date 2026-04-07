import type { CollectionConfig } from "payload";

export const UserItems: CollectionConfig = {
  slug: "user-items",
  admin: {
    useAsTitle: "id",
    // hidden: true,
    defaultColumns: ["user", "item", "createdAt"],
  },
  timestamps: true,
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
    },
    {
      name: "item",
      type: "relationship",
      relationTo: "order-items",
      hasMany: false,
    },
    {
      name: "config",
      type: "json",
      defaultValue: {},
    },
  ],
};
