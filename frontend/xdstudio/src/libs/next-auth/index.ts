import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";

import {
  AuthenticateAndLinkProviderDocument,
  LoginDocument,
  type User as GqlUser,
} from "@/libs/graphql/generates/graphql";
import { JWT } from "next-auth/jwt";
import { env } from "@/env";
import { DiscordUser } from "@type/user.type";
import { executeAuth } from "../graphql/execute";
import getBaseUrl from "@/utils/getBaseUrl";

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

export const AuthProvider = NextAuth({
  //   secret: [env.AUTH_SECRET ?? `xd`],
  basePath: "/api/auth",
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
            // throw new Error("No authentication result");
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

      async function AuthenticateAndLinkProvider({
        accessToken,
        email,
        provider,
        providerAccountId,
        refreshToken,
        name,
        image,
      }: {
        provider: string;
        accessToken: string;
        refreshToken?: string;
        email: string;
        name: string | undefined | null;
        providerAccountId: string;
        image: string;
      }) {
        try {
          const res = await executeAuth(AuthenticateAndLinkProviderDocument, {
            email,
            name,
            provider,
            providerAccountId,
            accessToken,
            refreshToken,
            image,
          });
          return res.data;
        } catch (err) {
          console.error("❌ Error during Discord RegisterAndLogin", err);
          return false;
        }
      }
      switch (account.provider) {
        case "discord": {
          const discordUser = profile as unknown as DiscordUser;
          try {
            if (!account.access_token || !profile?.email) return false;
            const authResult = await AuthenticateAndLinkProvider({
              accessToken: account.access_token,
              email: profile.email,
              name: discordUser.username,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              refreshToken: account.refresh_token,
              image: discordUser.image_url,
            });
            if (authResult) {
              const login = authResult?.authenticateAndLinkProvider;

              if (!login || login.__typename !== "AuthProvidersSuccess") {
                return false;
              }

              const { item, ...secret } = login;
              Object.assign(user, {
                ...item,
                ...secret,
                image: discordUser.image_url,
              });

              return true;
            }
            throw new Error("Discord auth fail");
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
        });
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        const {
          sessionToken,
          accessToken,
          refetchToken,
          passwordResetIssuedAt,
          passwordResetRedeemedAt,
          ...rest
        } = token;
        session.user = {
          ...session.user,
          ...rest,
          email: token.email ?? "",
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // // Allows relative callback URLs
      baseUrl = env.NEXT_PUBLIC_SITE_URL;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
