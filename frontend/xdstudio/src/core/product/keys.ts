import type { Cart } from "@/payload-types";
import type { KeyRegistry } from "../types";

export const keys = {
  all: ["products"],
  page(page: number) {
    return {
      queryKey: [...this.all, page],
      tag: [...this.all, `${this.all}-${page}`],
    };
  },
  product(id: string) {
    return {
      queryKey: [...this.all, id],
      tag: [...this.all, `product-${id}`],
    };
  },
  checkUserProductStatus(productId: string, userId: string, cartId: string) {
    return {
      queryKey: [...this.all, productId, userId, cartId],
      tag: [...this.all, `checkProduct-${productId}-${userId}-${cartId}`],
    };
  },
} satisfies KeyRegistry;
