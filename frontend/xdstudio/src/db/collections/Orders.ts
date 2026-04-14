import type { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["user", "status", "createdAt"],
  },
  timestamps: true,
  hooks: {
    afterOperation: [
      async ({ operation, result, req }) => {
        if (operation === "create" && result?.id) {
          const userId = result.user;
          if (userId && typeof userId === "string") {
            // Deduct points if items had unitPrice
            // (In a full implementation, tally from OrderItems after creation)
            // Skipped for now — implement per-business-logic
          }
        }
        return result;
      },
    ],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
    },
    {
      name: "items",
      type: "relationship",
      relationTo: "order-items",
      hasMany: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Pending", value: "PENDING" },
        { label: "Paid", value: "PAID" },
        { label: "Cancelled", value: "CANCELLED" },
        { label: "Shipped", value: "SHIPPED" },
        { label: "Delivered", value: "DELIVERED" },
      ],
      defaultValue: "PENDING",
      required: true,
    },
  ],
};
