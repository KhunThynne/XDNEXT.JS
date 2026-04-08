import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { revalidateTag } from "next/cache";

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
      async ({ operation, result, req, args }) => {
      
        try {
          switch (operation) {
            case "create": {
              if (!result.id) return;
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
              break;
            }
            case "updateByID": {
              const updatedId = result.id || args.data.id;

              if (updatedId) {
                revalidateTag(`product-${updatedId}`, "");
                // revalidatePath(`/${locale}/product/${updatedId}`);
              }
              break;
            }
            default:
              break;
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
      name: "media",
      type: "blocks",
      minRows: 1,
      blocks: [
        {
          slug: "internalMedia",
          labels: { singular: "Internal File", plural: "Internal Files" },
          fields: [
            {
              name: "file",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          slug: "externalMedia",
          labels: { singular: "External URL", plural: "External URLs" },
          fields: [
            {
              name: "url",
              type: "text",
              label: "External Media URL (Image or Video)",
              required: true,
            },
          ],
        },
      ],
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
    {
      name: "details",
      type: "richText",
      admin: {
        description:
          "Main product content. Supports hierarchical headings, rich media blocks, and editorial layouts for storytelling.",
      },
      editor: lexicalEditor(),
    },
  ],
};
