import AuthConfig from "@/shared/libs/next-auth/config";
import NextAuth from "next-auth";
import { authAndLinkActions } from "./core/auth";
import type { DiscordUser } from "@type/user.type";
import { env } from "./env";
import type { JWT } from "next-auth/jwt";
import { getUser, getUserCache } from "./core/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  //   secret: [env.AUTH_SECRET ?? `xd`],
  basePath: "/api/auth",
  ...AuthConfig,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.provider) return false;
      console.log("🔐 SignIn via provider:", account.provider);

      switch (account.provider) {
        case "discord": {
          const discordUser = profile as unknown as DiscordUser;
          try {
            if (!account.access_token || !profile?.email) return false;
            const auth = await authAndLinkActions({
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
    async jwt({ token, user }) {
      const userId = token.id || user?.id;
      if (!userId) return token;
      const userCache = await getUser({ id: userId });
      if (!userCache) return null;
      if (user) {
        return {
          ...token,
          ...user,
        };
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
    // async redirect({ url, baseUrl }) {
    //   // // Allows relative callback URLs
    //   baseUrl = env.NEXT_PUBLIC_SITE_URL;
    //   if (url.startsWith("/")) return `${baseUrl}${url}`;
    //   // // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },
});
