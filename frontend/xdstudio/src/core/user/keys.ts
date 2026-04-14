import type { KeyRegistry } from "../types";

export const keys = {
  all: ["user"],
  credit(userId: string) {
    return {
      queryKey: ["credit", userId],
      tag: [...this.all, `user-credit-${userId}`],
    };
  },
  userItems(userId: string) {
    return {
      queryKey: [...this.all, "user-items", userId],
      tag: [...this.all, `user-items-${userId}`],
    };
  },
  user(userId: string) {
    return {
      queryKey: [...this.all, "user", userId],
      tag: [...this.all, `user-${userId}`],
    };
  },
} satisfies KeyRegistry;
