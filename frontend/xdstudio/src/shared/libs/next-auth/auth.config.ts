import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

import type { User as GqlUser } from "@/payload-types";

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

export default {
  //   secret: [env.AUTH_SECRET ?? `xd`],
  basePath: "/api/auth",
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [GitHub],
} satisfies NextAuthConfig;
