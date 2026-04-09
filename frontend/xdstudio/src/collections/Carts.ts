import type { CollectionConfig } from "payload";

export const Carts: CollectionConfig = {
  slug: "carts",
  admin: {
    defaultColumns: ["user", "status", "createdAt", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  timestamps: true,
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
      admin: {
        allowCreate: false,
      },
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
      type: "join",
      on: "cart",
      collection: "cart-items",
    },
  ],
  defaultPopulate: {
    items: true,
  },
};
