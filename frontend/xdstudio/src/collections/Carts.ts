import type { CollectionConfig } from "payload";

export const Carts: CollectionConfig = {
  slug: "carts",
  admin: {
    useAsTitle: "status",
    defaultColumns: ["user", "status", "createdAt"],
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
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "ACTIVE" },
        { label: "Saved", value: "SAVED" },
        { label: "Abandoned", value: "ABANDONED" },
      ],
      defaultValue: "ACTIVE",
    },
    {
      name: "items",
      type: "relationship",
      relationTo: "cart-items",
      hasMany: true,
    },
  ],
};
