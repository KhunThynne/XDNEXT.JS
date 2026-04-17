import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "@/env";
import type { User as GqlUser } from "@/payload-types";
import { loginAction } from "@/core/auth";

declare module "next-auth" {
  interface Session {
    user?: GqlUser;
  }

  interface User extends GqlUser {
    readonly auth?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends GqlUser {
    readonly auth?: string;
  }
}
const AuthConfig: NextAuthConfig = {
  providers: [
    DiscordProvider({
      clientId: env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const result = await loginAction({
            email: credentials.email as string,
            password: credentials.password as string,
          });
          if (result && result.user) {
            return {
              ...result.user,
              token: result.token,
              exp: result.exp,
            };
          }
          return null;
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),
  ],
  trustHost: true,
  pages: {
    signIn: "/login",
    error: "/login",
  },
};

export default AuthConfig;
