"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";
import { getPayload } from "@/shared/libs/payload/getPayload";
import type { PayloadArgsWithoutCollection } from "@/shared/libs/payload/types";
import { keys } from "./keys";

export const updateProductTag = async () => {
  updateTag("products");
};

export async function getProduct(
  arg: PayloadArgsWithoutCollection<"findByID", "products">
) {
  try {
    const payload = await getPayload();
    const product = await payload.findByID({
      ...arg,
      collection: "products",
    });
    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting product: ${error.message}`);
    }
    throw new Error(`Error getting product: ${error}`);
  }
}

export async function getProducts(
  arg: PayloadArgsWithoutCollection<"find", "products">
) {
  try {
    const payload = await getPayload();
    const products = await payload.find({
      ...arg,
      collection: "products",
    });
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting products: ${error.message}`);
    }
    throw new Error(`Error getting products: ${error}`);
  }
}

export const getProductsCache = async (
  arg: PayloadArgsWithoutCollection<"find", "products">
) => {
  "use cache";
  cacheLife("max");
  cacheTag(...keys.page(arg.page ?? 1).tag);
  return getProducts(arg);
};

export const getProductCache = async (id: string) => {
  "use cache";
  cacheLife("hours");
  cacheTag(...keys.product(id).tag);
  return await getProduct({
    id,
  });
};
export const checkUserProductStatus = async ({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) => {
  try {
    const payload = await getPayload();

    // 1. Check if it's in the cart
    let inCart = false;
    const carts = await payload.find({
      collection: "carts",
      where: { user: { equals: userId } },
      limit: 1,
    });

    if (carts.docs.length > 0) {
      const cartId = carts.docs[0].id;
      const cartItems = await payload.find({
        collection: "cart-items",
        where: {
          and: [
            { cart: { equals: cartId } },
            { product: { equals: productId } },
          ],
        },
        limit: 1,
        depth: 0,
      });
      inCart = cartItems.docs.length > 0;
    }

    // 2. Check if in user inventory (UserItems)
    let inUserItem = false;

    // Find order-items associated with this product
    const orderItems = await payload.find({
      collection: "order-items",
      where: { product: { equals: productId } },
      pagination: false,
      depth: 0,
    });

    if (orderItems.docs.length > 0) {
      const orderItemIds = orderItems.docs.map((doc) => doc.id);
      const userItems = await payload.find({
        collection: "user-items",
        where: {
          and: [{ user: { equals: userId } }, { item: { in: orderItemIds } }],
        },
        limit: 1,
        depth: 0,
      });
      inUserItem = userItems.docs.length > 0;
    }

    return {
      productId,
      inCart,
      inUserItem,
      renderKey: crypto.randomUUID(),
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error checking user product status: ${error.message}`);
    }
    throw new Error(`Error checking user product status: ${error}`);
  }
};
export const getCachedCheckUserProductStatusCache = async (
  productId: string,
  userId: string,
  cartId: string
) => {
  "use cache";
  cacheLife("hours");
  cacheTag(
    `${userId}-${productId}-checkProduct`,
    `${cartId}-${productId}-checkProduct`,
    `${cartId}-${userId}-checkProduct`
  );
  return await checkUserProductStatus({ productId, userId });
};
