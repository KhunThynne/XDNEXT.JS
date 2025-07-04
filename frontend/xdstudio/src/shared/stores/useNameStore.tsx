import { createHookStore } from "./createHookStore";

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

export const useMainStore = createHookStore({
  key: "main",
  initial: {
    test: 5,
  },
});
