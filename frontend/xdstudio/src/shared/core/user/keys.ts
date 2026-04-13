import type { KeyRegistry } from "../typs";

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
  profile(userId: string) {
    return {
      queryKey: [...this.all, "profile", userId],
      tag: [...this.all, `user-profile-${userId}`],
    };
  },
} satisfies KeyRegistry;
