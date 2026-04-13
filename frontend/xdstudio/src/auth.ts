import { AuthProvider } from "@/shared/libs/next-auth";

export const { auth, handlers, signIn, signOut } = AuthProvider;
