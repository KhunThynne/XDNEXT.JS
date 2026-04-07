"use server";

import { getPayload } from "@/libs/payload/getPayload";
import type { Product, User } from "@/payload-types";

export async function checkUserProductStatus({
  userId,
  productId,
}: {
  userId: User["id"];
  productId: Product["id"];
}) {
  const payload = await getPayload();
  const { docs } = await payload.find({
    collection: "user-items",
    where: {
      user: {
        equals: userId,
      },
      product: {
        equals: productId,
      },
    },
  });

  return docs;
}

export async function getProduct(id: string) {
  const payload = await getPayload();
  const product = await payload.findByID({
    collection: "products",
    id,
  });
  return product;
}
