import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "username", "email", "role"],
  },
  auth: true,
  timestamps: true,
  hooks: {
    afterOperation: [
      async ({ operation, result, req }) => {
        if (operation === "create" && result?.id) {
          const id = result.id;
          // Auto-create Supplier
          await req.payload.create({
            collection: "suppliers",
            data: {
              name: `Supplier for ${result.name ?? result.email}`,
              description: "Supplier initials",
              user: id,
            },
          });
          // Auto-create UserPoint
          await req.payload.create({
            collection: "user-points",
            data: {
              user: id,
              total_point: 0,
              total_spent: 0,
            },
          });
          // Auto-create Cart
          await req.payload.create({
            collection: "carts",
            data: { user: id, status: "ACTIVE" },
          });
          // Auto-create UserPreference
          await req.payload.create({
            collection: "user-preferences",
            data: { user: id },
          });
        }
        return result;
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "username",
      type: "text",
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
      name: "provider",
      type: "text",
      defaultValue: "credentials",
      admin: {
        condition: (data) => !!data?.id,
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
      defaultValue: "USER",
    },
    {
      name: "accounts",
      type: "relationship",
      relationTo: "accounts",
      hasMany: true,
      admin: {
        description: "All provider accounts linked to this user",
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "carts",
      type: "relationship",
      relationTo: "carts",
      hasMany: true,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "items",
      type: "relationship",
      relationTo: "user-items",
      hasMany: true,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "point",
      type: "relationship",
      relationTo: "user-points",
      hasMany: false,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "supplier",
      type: "relationship",
      relationTo: "suppliers",
      hasMany: true,
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
      type: "relationship",
      relationTo: "user-preferences",
      hasMany: false,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
    {
      name: "posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      admin: {
        condition: (data) => !!data?.id,
      },
    },
  ],
};
