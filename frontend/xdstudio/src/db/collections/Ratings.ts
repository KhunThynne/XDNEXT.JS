import type { CollectionConfig } from "payload";

export const Ratings: CollectionConfig = {
  slug: "ratings",
  admin: {
    useAsTitle: "score",
    defaultColumns: ["score", "comment", "createdAt"],
  },
  timestamps: true,
  fields: [
    {
      name: "score",
      type: "number",
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: "Score 1 to 5",
      },
    },
    {
      name: "comment",
      type: "textarea",
    },
  ],
};
