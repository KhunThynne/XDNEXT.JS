import { keys } from "@/shared/core";
import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "username", "email", "role"],
  },
  auth: true,
  access: {
    read: () => true,
  },
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ operation, doc, req, previousDoc }) => {
        if (operation === "create") {
          await req.payload.create({
            collection: "suppliers",
            data: {
              name: `Supplier for ${doc.email}`,
              user: doc.id,
            },
            req,
          }); // Auto-create Cart
          await req.payload.create({
            collection: "carts",
            data: { user: doc.id, status: "ACTIVE" },
            req,
          });
          // // Auto-create UserPoint

          // //  Auto-create UserPreference
          await req.payload.create({
            collection: "user-preferences",
            data: { user: doc.id },
            req,
          });
        }

        if (operation === "update") {
          // สมมติว่าฟิลด์ชื่อ 'credit' หรือ 'points'
          const hasCreditChanged = doc.credit !== previousDoc.credit;

          if (hasCreditChanged) {
            const tag = keys.user.credit(doc.id).tag[1];
            revalidateTag(tag, "");
            console.log(
              `[Admin Update] Credit changed for ${doc.id}, revalidated: ${tag}`
            );
          }
        }
      },
    ],
    // afterOperation: [
    //   async ({ operation, result, req, collection }) => {
    //     if (result.id) {
    //       const id = await result.id;
    //       switch (operation) {
    //         case "create":
    //           console.log(collection);
    //           // // Auto-create Supplier

    //           await req?.payload?.create({
    //             collection: "suppliers",
    //             data: {
    //               name: `Supplier for ${result.name ?? result.email}`,
    //               description: "Supplier initials",
    //               user: id,
    //             },
    //           });
    //           // // Auto-create UserPoint
    //           // await req.payload.create({
    //           //   collection: "user-points",
    //           //   data: {
    //           //     user: id,
    //           //     total_point: 0,
    //           //     total_spent: 0,
    //           //   },
    //           // });
    //           // // Auto-create Cart
    //           // await req.payload.create({
    //           //   collection: "carts",
    //           //   data: { user: id, status: "ACTIVE" },
    //           // });
    //           // // Auto-create UserPreference
    //           // await req.payload.create({
    //           //   collection: "user-preferences",
    //           //   data: { user: id },
    //           // });
    //           break;
    //         default:
    //           break;
    //       }
    //     }
    //     return result;
    //   },
    // ],
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) return data.name;
            return value;
          },
        ],
      },
    },
    {
      name: "image",
      type: "text",
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "ADMIN" },
        { label: "User", value: "USER" },
        { label: "Moderator", value: "MODERATOR" },
        { label: "Guest", value: "GUEST" },
      ],
      required: true,
      defaultValue: "USER",
    },

    {
      name: "carts",
      type: "join",
      on: "user",
      collection: "carts",
      hasMany: true,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "items",
      type: "join",
      on: "user",
      collection: "user-items",
      hasMany: true,
      admin: {
        // hidden: true,
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "accounts",
      type: "join",
      on: "user",
      collection: "accounts",
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "point",
      type: "join",
      on: "user",
      collection: "user-points",
      hasMany: false,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "credit",
      type: "number",
      defaultValue: 0,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "supplier",
      type: "join",
      on: "user",
      collection: "suppliers",
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "orders",
      type: "relationship",
      relationTo: "orders",
      hasMany: true,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "preference",
      type: "join",
      on: "user",
      collection: "user-preferences",
      admin: {
        defaultColumns: ["setting", "createdAt", "updatedAt"],
        condition: (data) => !!data?.id,
      },
    },
  ],
};
