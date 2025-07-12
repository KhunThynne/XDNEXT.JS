import NextAuth, { AuthError, DefaultSession, Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { executeAuth } from "./libs/graphql/execute";
import {
  LoginDocument,
  RegisterAndLoginDocument,
  Role,
  UserProvider,
} from "./libs/graphql/generates/graphql";
import { type User as GqlUser } from "@/libs/graphql/generates/graphql";
import { JWT } from "next-auth/jwt";
import { env } from "@/env";
import { DiscordUser } from "@type/user.type";

declare module "next-auth" {
  interface Session {
    user: GqlUser & Omit<DefaultSession["user"], "image">;
    jwt_token?: string;
  }
  interface User extends GqlUser {
    __brand?: "User";
    jwt_token?: string;
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
  secret: [env.NEXTAUTH_SECRET],
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

        console.log(credentials);

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
    async signIn({ user, account, profile }) {
      if (!account?.provider) return false;
      console.log("🔐 SignIn via provider:", account.provider);
      switch (account.provider) {
        case "discord": {
          const discordUser = profile as unknown as DiscordUser;
          const password = `${discordUser.id}-${discordUser.email}`;
          try {
            const res = await executeAuth(RegisterAndLoginDocument, {
              email: discordUser.email,
              password,
              username: discordUser.username,
              image: discordUser.image_url,
              provider: UserProvider.Discord,
            });
            const login = res.data?.registerAndLogin;
            if (login?.jwt_token) {
              user.id = login.user.id.toString();
              user.role = login.user.role;
              user.jwt_token = login.jwt_token;
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
        token.id =
          typeof user.id === "string" ? user.id : String(user.id ?? "");
        token.role = user.role ?? Role.User;
        token.jwt_token = user.jwt_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = parseInt(token.id!);
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
});
