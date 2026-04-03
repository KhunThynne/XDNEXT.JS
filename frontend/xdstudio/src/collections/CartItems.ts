import type { CollectionConfig } from "payload";

export const CartItems: CollectionConfig = {
  slug: "cart-items",
  admin: {
    useAsTitle: "id",
    hidden: true,
  },
  timestamps: true,
  fields: [
    {
      name: "cart",
      type: "relationship",
      relationTo: "carts",
      hasMany: false,
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
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
