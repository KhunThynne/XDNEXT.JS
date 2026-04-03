import type { CollectionConfig } from "payload";

export const UserPoints: CollectionConfig = {
  slug: "user-points",
  admin: {
    useAsTitle: "total_point",
    hidden: true,
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
      name: "total_point",
      type: "number",
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: "total_spent",
      type: "number",
      required: true,
      defaultValue: 0,
      min: 0,
      admin: {
        description: "This current is thai bath (THB)",
      },
    },
  ],
};
