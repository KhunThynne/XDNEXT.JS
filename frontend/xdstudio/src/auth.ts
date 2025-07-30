import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { executeAuth } from "./libs/graphql/execute";
import {
  GetUserByEmailQuery,
  LoginDocument,
} from "./libs/graphql/generates/graphql";
import { type User as GqlUser } from "@/libs/graphql/generates/graphql";
import { JWT } from "next-auth/jwt";
import { env } from "@/env";
import { DiscordUser } from "@type/user.type";
import { CreateUserMutationDocument } from "./libs/graphql/operations/user/createUser.mutation";
import { GetUserByEmailDocument } from "./libs/graphql/operations/user/getUserByEmail";
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
            throw new Error("No authentication result");
          }

          if ("item" in authResult && authResult.sessionToken) {
            const user = authResult.item;
            return {
              name: user.name,
              email: user.email,
              role: user.role,
              sessionToken: authResult.sessionToken,
              provider: user.provider,
              username: user.username,
              id: user.id,
              image: user.image,
            };
          }

          if ("message" in authResult) {
            throw new Error(authResult.message);
          }

          throw new Error("Authentication failed");
        } catch (err) {
          throw new Error(
            (err as { message?: string }).message ?? "Login failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;

      if (url.startsWith("/")) return `${baseUrl}${url}`;

      return baseUrl;
    },
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
              const res = await executeAuth(CreateUserMutationDocument, {
                email: discordUser.email,
                password,
                username: discordUser.username,
                name: discordUser.username,
                image: discordUser.image_url,
                provider: "discord",
              });
              user_ = res.data.createUser as GetUserByEmailQuery["user"];
            }

            if (user_) {
              const res = await executeAuth(LoginDocument, {
                email: user_.email as string,
                password: password,
              });

              const authResult = res.data?.authenticateUserWithPassword;
              if (!authResult) {
                throw new Error("No authentication result");
              }

              if ("item" in authResult && authResult.sessionToken) {
                const login = authResult.item;

                user.name = login.name;
                user.email = login.email;
                user.role = login.role;
                user.sessionToken = authResult.sessionToken;
                user.provider = login.provider;
                user.username = login.username;
                user.id = login.id;
                user.image = login.image;
              }
              return true;
            } else {
              throw new Error("Discord fail auth");
            }
          } catch (err) {
            console.error("❌ Error during Discord RegisterAndLogin", err);
            return false;
          }
        }

        case "credentials":
          console.log("🧾 Credentials login:", user);
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
        token.sessionToken = user?.sessionToken ?? "";
        token.email = user.email;
        token.name = user.name;
        token.username = user.username;
        token.role = user.role;
        token.id = user.id ?? "";
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.username = token.username;
      }
      // console.log("session", token);
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
});
