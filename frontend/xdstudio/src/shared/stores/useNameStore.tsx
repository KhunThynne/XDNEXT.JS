import { createHookStore } from "@/libs/zustand/createHookStore";

type User = {
  name: string;
  email: string;
};

export const useUserStore = createHookStore<User, "user">({
  key: "user",
  initial: {
    name: "Thynne",
    email: "me@example.com",
  },
});

export const useStore = createHookStore({
  initial: {
    test: 5,
  },
});

export const useTestStore = createHookStore({
  key: "test",
  initial: {
    data: 5,
  },
});
