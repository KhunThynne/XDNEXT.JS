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
} satisfies KeyRegistry;
