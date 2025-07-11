import NextAuth, { AuthError, DefaultSession, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { executeAuth } from "./libs/graphql/execute";
import { LoginDocument, Role } from "./libs/graphql/generates/graphql";
import { type User as GqlUser } from "@/libs/graphql/generates/graphql";
import { JWT } from "next-auth/jwt";
import { env } from "./env";

declare module "next-auth" {
  interface Session {
    user: GqlUser & Omit<DefaultSession["user"], "image">;
    jwt_token?: string;
  }
  interface User extends GqlUser {
    __brand?: "User";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    jwt_token?: string;
    id?: string;
    role?: Role;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: [env.NEXT_PUBLIC_AUTH_SECRET],
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const res = await executeAuth(LoginDocument, {
            email: credentials.email as string,
            password: credentials.password as string,
          });
          const data = res.data;

          if (data?.login?.user && data.login.jwt_token) {
            const { login } = data;
            if (!login?.user || !login.jwt_token) {
              throw new AuthError("Invalid credentials");
            }
            return {
              id: login.user.id.toString(),
              name: login.user.username,
              email: login.user.email,
              role: login.user.role,
              jwt_token: login.jwt_token,
              provider: login.user.provider,
              username: login.user.username,
            };
          }
          throw new AuthError("Auth error");
        } catch (err) {
          // console.error("Auth error:", err);
          throw new Error(
            (err as { message: string }).message ?? "Login failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.id =
          typeof user.id === "string" ? user.id : String(user.id ?? "");
        token.role = user.role!;
        // token.jwt_token = user.jwt_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = parseInt(token.id!);
        session.user.role = token.role;
        session.jwt_token = token.jwt_token;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
