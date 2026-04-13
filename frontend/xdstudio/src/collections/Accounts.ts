import type { CollectionConfig } from "payload";

export const Accounts: CollectionConfig = {
  slug: "accounts",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["provider", "providerAccountId", "user"],
    // hidden: true,
  },
  timestamps: true,
  fields: [
    {
      name: "provider",
      type: "text",
      required: true,
      admin: {
        description:
          "The name of the provider, e.g., google, github, facebook, line",
      },
    },
    {
      name: "providerAccountId",
      type: "text",
      required: true,
      index: true,
      admin: {
        description: "The unique user ID provided by the external provider",
      },
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      admin: {
        description: "The user associated with this provider account",
      },
    },
    {
      name: "accessToken",
      type: "text",
      admin: {
        description: "Access token used to call the provider API (short-lived)",
      },
    },
    {
      name: "refreshToken",
      type: "text",
      admin: {
        description:
          "Refresh token used to obtain a new access token when expired",
      },
    },
    {
      name: "expiresAt",
      type: "date",
      admin: {
        description: "Expiration time of the access token",
      },
    },
    {
      name: "scope",
      type: "text",
      admin: {
        description:
          "The scope or permissions granted by the provider for this token",
      },
    },
    {
      name: "meta",
      type: "json",
      admin: {
        description:
          "Additional provider-specific data stored as a JSON object",
      },
    },
  ],
};
