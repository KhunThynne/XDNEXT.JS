import type { CollectionConfig } from "payload";

export const PointTransactions: CollectionConfig = {
  slug: "point-transactions",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["user", "amount", "type", "status", "createdAt"],
  },
  timestamps: true,
  hooks: {
    beforeChange: [
      async ({ data, operation, originalDoc }) => {
        if (operation === "update") {
          const newStatus = data.status ?? originalDoc?.status;
          if (newStatus === "canceled" && !originalDoc?.expiredAt) {
            data.expiredAt = new Date().toISOString();
          }
        }
        return data;
      },
    ],
    afterOperation: [
      async (args) => {
        const { operation, result, req } = args;

        const isCreateSucceeded =
          operation === "create" && "status" in result && result.status === "succeeded";

        const isUpdateSucceeded =
          operation === "update" &&
          "status" in result &&
          result.status === "succeeded" &&
          "status" in (args as { previousDoc?: Record<string, unknown> }).previousDoc! &&
          (args as { previousDoc?: Record<string, unknown> }).previousDoc?.status !== "succeeded";

        if (isCreateSucceeded || isUpdateSucceeded) {
          try {
            const doc = result as Record<string, unknown>;
            const userId =
              doc.user && typeof doc.user === "object"
                ? (doc.user as { id?: string }).id
                : (doc.user as string | undefined);
            if (!userId) return result;

            const userPoints = await req.payload.find({
              collection: "user-points",
              where: { user: { equals: userId } },
              limit: 1,
            });

            const userPoint = userPoints.docs[0] as
              | { id: string; total_spent?: number }
              | undefined;
            if (userPoint) {
              const amount = (doc.amount as number) ?? 0;
              await req.payload.update({
                collection: "user-points",
                id: userPoint.id,
                data: {
                  total_spent: (userPoint.total_spent ?? 0) + amount,
                  total_point: ((userPoint.total_spent ?? 0) + amount) / 100,
                },
              });
            }
          } catch (error) {
            console.error("[Payload Hook] Error updating total_spent:", error);
          }
        }
        return result;
      },
    ],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      admin: {
        description: "Owner of transaction",
      },
    },
    {
      name: "isFavorite",
      type: "checkbox",
      defaultValue: false,
      label: "Is this a favorite post?",
    },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Earn", value: "earn" },
        { label: "Redeem", value: "redeem" },
      ],
      defaultValue: "earn",
      required: true,
    },
    {
      name: "amount",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Minor Unit",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Requires Payment Method", value: "requires_payment_method" },
        { label: "Requires Confirmation", value: "requires_confirmation" },
        { label: "Requires Action", value: "requires_action" },
        { label: "Processing", value: "processing" },
        { label: "Requires Capture", value: "requires_capture" },
        { label: "Canceled", value: "canceled" },
        { label: "Succeeded", value: "succeeded" },
      ],
      defaultValue: "requires_payment_method",
    },
    {
      name: "orders",
      type: "relationship",
      relationTo: "orders",
      hasMany: true,
    },
    {
      name: "metaData",
      type: "json",
    },
    {
      name: "expiredAt",
      type: "date",
      label: "Expired At (System Calculated)",
      admin: {
        readOnly: true,
      },
    },
  ],
};
