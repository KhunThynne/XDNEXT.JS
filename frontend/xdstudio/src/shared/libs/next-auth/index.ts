import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";

import type { JWT } from "next-auth/jwt";
import { env } from "@/env";
import type { DiscordUser } from "@type/user.type";
import { executeAuth } from "../graphql/execute";
import getBaseUrl from "@/utils/getBaseUrl";
import type { User as GqlUser } from "@/payload-types";
import { authAndLinkProvider, loginAction } from "@/shared/core/auth";

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
class CustomError extends CredentialsSignin {
  code = "custom_error";
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
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.provider) return false;
      console.log("🔐 SignIn via provider:", account.provider);

      switch (account.provider) {
        case "discord": {
          const discordUser = profile as unknown as DiscordUser;
          try {
            if (!account.access_token || !profile?.email) return false;
            const auth = await authAndLinkProvider({
              accessToken: account.access_token,
              email: profile.email,
              username: discordUser.username,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              refreshToken: account.refresh_token,
              image: discordUser.image_url,
            });
            if (auth) {
              const { item, ...secret } = auth;
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
        const { sessionToken, ...rest } = token;
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
