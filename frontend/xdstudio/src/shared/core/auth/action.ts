"use server";

import { env } from "@/env";
import { getPayload } from "@/shared/libs/payload/getPayload";
import type { User } from "@/payload-types";
import _ from "lodash";
export async function loginAction({
  email,
  password,
}: {
  email: User["email"];
  password: NonNullable<User["password"]>;
}) {
  const payload = await getPayload();
  return await payload.login({
    collection: "users",
    data: {
      email,
      password,
    },
  });
}
interface LinkProviderArgs {
  email: User["email"];
  username: User["username"];
  provider: string;
  providerAccountId: string;
  accessToken: string;
  refreshToken?: string;
  image: string;
}
export async function authAndLinkProvider({
  email,
  username,
  provider,
  providerAccountId,
  accessToken,
  refreshToken,
  image,
}: LinkProviderArgs) {
  const payload = await getPayload();

  try {
    const accountdata = await payload.find({
      collection: "accounts",
      where: { providerAccountId: { equals: providerAccountId } },
    });

    let {
      docs: [user],
    } = await payload.find({
      collection: "users",
      where: { email: { equals: email } },
    });
    const password = `${provider}-${username}-${env.PAYLOAD_SECRET}`;
    if (!user) {
      user = await payload.create({
        collection: "users",
        data: {
          username: username ?? email,
          email,
          password,
          image,
          role: "USER",
        },
      });
    }
    // Update tokne
    let account;
    if (!_.isEmpty(accountdata.docs)) {
      const [accountSelect] = accountdata.docs;
      account = await payload.update({
        collection: "accounts",
        id: accountSelect.id,
        data: {
          accessToken,
          refreshToken,
        },
      });
    } else {
      // Create new token account
      account = await payload.create({
        collection: "accounts",
        data: {
          provider,
          providerAccountId,
          accessToken,
          refreshToken,
          user: user.id,
        },
      });
    }

    if (!account.accessToken) throw new Error("Not found access token");

    const token = await payload.login({
      collection: "users",
      data: {
        email,
        password,
      },
    });
    return {
      __typename: "AuthProvidersSuccess" as const,
      item: user,
      accessToken: account.accessToken as string,
      refetchToken: account.refreshToken as string,
      token: token,
    };
  } catch (error: any) {
    console.error("Auth Error:", error);
    return {
      __typename: "AuthProvidersFailure" as const,
      message: error.message || "Unknown error",
    };
  }
}
