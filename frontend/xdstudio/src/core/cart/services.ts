"use server";
import { getPayload } from "@/shared/libs/payload/getPayload";
import type { PayloadArgsWithoutCollection } from "@/shared/libs/payload/types";
import { cacheLife, cacheTag } from "next/cache";
import type { DeleteOneArgs } from "payload";

export const getCartItems = async (
  arg: PayloadArgsWithoutCollection<"find", "cart-items">
) => {
  try {
    const payload = await getPayload();
    const result = await payload.find({
      ...arg,
      collection: "cart-items",
    });
    return JSON.parse(JSON.stringify(result));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting cart items: ${error.message}`);
    }
    throw new Error(`Error getting cart items: ${error}`);
  }
};

export const getCartItemsCache = async (
  arg: PayloadArgsWithoutCollection<"find", "cart-items">,
  tag: string[]
) => {
  "use cache";
  cacheLife("max");
  cacheTag(...tag);
  return await getCartItems(arg);
};

export const getCarts = async (
  arg: PayloadArgsWithoutCollection<"find", "carts">
) => {
  try {
    const payload = await getPayload();
    return await payload.find({
      ...arg,
      collection: "carts",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting carts: ${error.message}`);
    }
    throw new Error(`Error getting carts: ${error}`);
  }
};

export const deleteCartItem = async (
  arg: Omit<DeleteOneArgs, "collection">
) => {
  try {
    const payload = await getPayload();
    return await payload.delete({
      ...arg,
      collection: "cart-items",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error deleting cart item: ${error.message}`);
    }
    throw new Error(`Error deleting cart item: ${error}`);
  }
};

export const createCartItem = async (
  arg: PayloadArgsWithoutCollection<"create", "cart-items">
) => {
  try {
    const payload = await getPayload();
    return await payload.create({
      ...arg,
      collection: "cart-items",
    } as any);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating cart item: ${error.message}`);
    }
    throw new Error(`Error creating cart item: ${error}`);
  }
};

export const deleteCartItems = async (
  arg: Omit<DeleteOneArgs, "collection">
) => {
  try {
    const payload = await getPayload();
    return await payload.delete({
      ...arg,
      collection: "cart-items",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error deleting cart items: ${error.message}`);
    }
    throw new Error(`Error deleting cart items: ${error}`);
  }
};
