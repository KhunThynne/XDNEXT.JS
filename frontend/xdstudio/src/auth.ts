import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { executeAuth } from "./libs/graphql/execute";
import {
  CreateUserDocument,
  GetUserByEmailDocument,
  GetUserByEmailQuery,
  LoginDocument,
} from "./libs/graphql/generates/graphql";
import { type User as GqlUser } from "@/libs/graphql/generates/graphql";
import { JWT } from "next-auth/jwt";
import { env } from "@/env";
import { DiscordUser } from "@type/user.type";

declare module "next-auth" {
  interface Session {
    user: GqlUser;
  }

  interface User extends GqlUser {
    sessionToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends GqlUser {
    sessionToken?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: [env.AUTH_SECRET],
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
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
          const authResult = data?.authenticateUserWithPassword;

          if (!authResult) {
            return null;
            throw new Error("No authentication result");
          }

          if ("item" in authResult && authResult.sessionToken) {
            const user = authResult.item;
            return {
              ...user,
              sessionToken: authResult.sessionToken,
            };
          }

          if ("message" in authResult) {
            return null;
            // throw new Error(authResult.message);
          }

          throw new Error("Authentication failed");
        } catch (err) {
          return null;
          throw new Error(
            (err as { message?: string }).message ?? "Login failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.provider) return false;
      console.log("🔐 SignIn via provider:", account.provider);
      switch (account.provider) {
        case "discord": {
          const discordUser = profile as unknown as DiscordUser;
          const password = `${discordUser.id}-${discordUser.email}`;
          try {
            const userData = await executeAuth(GetUserByEmailDocument, {
              email: discordUser.email,
            });

            let user_: GetUserByEmailQuery["user"] = userData.data.user;
            if (!user_) {
              const res = await executeAuth(CreateUserDocument, {
                email: discordUser.email,
                name: discordUser.username,
                password,
                provider: "discord",
              });

              user_ = res.data.createUser;
            }

            if (user_) {
              const res = await executeAuth(LoginDocument, {
                email: user_.email as string,
                password,
              });

              const authResult = res.data?.authenticateUserWithPassword;
              if (!authResult) {
                throw new Error("No authentication result");
              }

              if ("item" in authResult && authResult.sessionToken) {
                const login = authResult.item;

                Object.assign(user, {
                  ...login,
                  image: discordUser.image_url,
                  sessionToken: user?.sessionToken ?? "",
                });
              }
              return true;
            } else {
              return false;
              throw new Error("Discord fail auth");
            }
          } catch (err) {
            console.error("❌ Error during Discord RegisterAndLogin", err);
            return false;
          }
        }

        case "credentials":
          // console.log("🧾 Credentials login:", user);
          return true;

        case "google":
          console.log("🔵 Google login:", profile);
          return true;

        case "github":
          console.log("⚫ GitHub login:", profile);
          return true;

        default:
          console.warn("⚠️ Unknown provider:", account.provider);
          return false;
      }
    },
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        Object.assign(token, {
          ...user,
          sessionToken: user?.sessionToken ?? "",
        });
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.carts = token.carts;
        session.user.image = token.image;
        session.user.point = token.point;
      }
      // console.log("session", token);
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
