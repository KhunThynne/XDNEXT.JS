"use server";

import { getPayload } from "@/libs/payload/getPayload";
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

export async function getProduct(id: string) {
  try {
    const payload = await getPayload();
    const product = await payload.findByID({
      collection: "products",
      id,
      depth: 50,
    });
    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting product: ${error.message}`);
    }
    throw new Error(`Error getting product: ${error}`);
  }
}
