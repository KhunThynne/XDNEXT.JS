import type { Cart } from "@/payload-types";
import type { KeyRegistry } from "../types";

export const keys = {
  all: ["carts"],
  list(cartId: Cart["id"]) {
    return {
      queryKey: [...this.all, cartId],
      tag: [...this.all, `${this.all}-${cartId}`],
    };
  },
} satisfies KeyRegistry;
