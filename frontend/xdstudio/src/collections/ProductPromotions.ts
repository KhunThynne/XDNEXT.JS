import type { CollectionConfig } from "payload";

export const ProductPromotions: CollectionConfig = {
  slug: "product-promotions",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["productId", "promotionId", "publishedAt"],
  },
  fields: [
    {
      name: "productId",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
    },
    {
      name: "promotionId",
      type: "relationship",
      relationTo: "promotions",
      hasMany: true,
    },
    {
      name: "publishedAt",
      type: "date",
    },
    {
      name: "images",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
    },
  ],
};
