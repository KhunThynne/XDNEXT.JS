import { AuthProvider } from "./libs/next-auth";

export const { auth, handlers, signIn, signOut } = AuthProvider;
