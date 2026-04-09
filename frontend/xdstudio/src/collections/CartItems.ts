import type { CollectionConfig } from "payload";

export const CartItems: CollectionConfig = {
  slug: "cart-items",
  admin: {
    useAsTitle: "cart",
    hidden: true,
    defaultColumns: ["cart", "product", "quantity", "createdAt", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  timestamps: true,
  fields: [
    {
      name: "cart",
      type: "relationship",
      relationTo: "carts",
      hasMany: false,
      required: true,
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
      required: true,
      admin: { description: "Product item in cart" },
    },
    {
      name: "quantity",
      type: "number",
      required: true,
      defaultValue: 1,
      min: 1,
    },
  ],
};
