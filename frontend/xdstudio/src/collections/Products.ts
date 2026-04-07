import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "createdAt"],
  },
  access: {
    read: () => true,
  },
  timestamps: true,
  hooks: {
    beforeChange: [
      async ({ data, operation, originalDoc }) => {
        const now = new Date().toISOString();
        if (
          data.status === "published" &&
          (operation === "create" || originalDoc?.status !== "published")
        ) {
          data.publishedAt = now;
        }
        return data;
      },
    ],
    afterOperation: [
      async ({ operation, result, req }) => {
        try {
          if (operation === "create" && result?.id) {
            // Auto-create Stock for new product
            const stocks = await req.payload.find({
              collection: "stocks",
              where: { product: { equals: result.id } },
              limit: 1,
            });
            if (stocks.totalDocs === 0) {
              await req.payload.create({
                collection: "stocks",
                data: {
                  product: result.id,
                  quantity: 0,
                  type: "by_stock",
                },
              });
            }
          }
        } catch (err) {
          console.error(err);
        }

        return result;
      },
    ],
  },
  fields: [
    {
      name: "status",
      type: "select",
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "draft",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Product name.",
      },
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "version",
      type: "text",
      defaultValue: "beta",
      admin: {
        description: "Product version.",
      },
    },
    {
      name: "averageScore",
      type: "number",
      min: 0,
      max: 5,
      defaultValue: 0,
      admin: {
        description: "Average Score from Ratings",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        readOnly: true,
      },
    },
    {
      name: "supplier",
      type: "relationship",
      relationTo: "suppliers",
      hasMany: false,
    },
    {
      name: "stock",
      type: "relationship",
      relationTo: "stocks",
      hasMany: false,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "price",
      type: "relationship",
      relationTo: "prices",
      hasMany: false,
    },
    {
      name: "previewImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "details",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "media",
      type: "richText",
      editor: lexicalEditor(),
      admin: {
        description:
          "Can place url video or image url preview. First item is preview main.",
      },
    },
    {
      name: "faqs",
      type: "relationship",
      relationTo: "faqs",
      hasMany: true,
      admin: {
        description:
          "A list of FAQs related to this product. Each FAQ has a question and an answer.",
      },
    },
    {
      name: "ratings",
      type: "relationship",
      relationTo: "ratings",
      hasMany: true,
      admin: {
        condition: () => false,
      },
    },
  ],
};
