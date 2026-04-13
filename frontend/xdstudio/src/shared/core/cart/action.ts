"use server";
import { getPayload } from "@/libs/payload/getPayload";
import type { PayloadArgsWithoutCollection } from "@/libs/payload/types";
export const getCartItems = async (
  arg: PayloadArgsWithoutCollection<"find", "cart-items">
) => {
  try {
    const payload = await getPayload();
    return await payload.find({
      ...arg,
      collection: "cart-items",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting cart items: ${error.message}`);
    }
    throw new Error(`Error getting cart items: ${error}`);
  }
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
  arg: PayloadArgsWithoutCollection<"delete", "cart-items">
) => {
  try {
    const payload = await getPayload();
    return await payload.delete({
      ...arg,
      collection: "cart-items",
    } as any);
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
  arg: PayloadArgsWithoutCollection<"delete", "cart-items">
) => {
  try {
    const payload = await getPayload();
    return await payload.delete({
      ...arg,
      collection: "cart-items",
    } as any);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error deleting cart items: ${error.message}`);
    }
    throw new Error(`Error deleting cart items: ${error}`);
  }
};

