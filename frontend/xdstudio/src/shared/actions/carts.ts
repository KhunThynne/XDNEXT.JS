"use server";
import { getPayload } from "@/libs/payload/getPayload";
import type { Cart, CartItem, Product } from "@/payload-types";
export const getCartItems = async ({
  id,
  page = 0,
  limit = 10,
}: {
  id: CartItem["id"];
  page?: number;
  limit?: number;
}) => {
  try {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "cart-items",
      where: { cart: { equals: id } },
      limit,
      page,
      depth: 8,
    });
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

export const getCarts = async ({
  id,
  page = 0,
  limit = 10,
}: {
  id: Cart["id"];
  page?: number;
  limit?: number;
}) => {
  try {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "carts",
      where: { id: { equals: id } },
      limit,
      page,
      depth: 99,
    });
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

export const deleteCartItem = async (id: CartItem["id"]) => {
  try {
    const payload = await getPayload();
    const result = await payload.delete({
      collection: "cart-items",
      id,
    });
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

export const createCartItem = async ({
  id,
  productId,
  quantity = 1,
}: {
  id: Cart["id"];
  productId: Product["id"];
  quantity?: CartItem["quantity"];
}) => {
  try {
    const payload = await getPayload();
    const result = await payload.create({
      collection: "cart-items",
      data: {
        cart: id,
        product: productId,
        quantity,
      },
    });
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};
