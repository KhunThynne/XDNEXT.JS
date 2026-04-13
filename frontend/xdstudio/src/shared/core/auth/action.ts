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
  try {
    const payload = await getPayload();
    return await payload.login({
      collection: "users",
      data: {
        email,
        password,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting cart items: ${error.message}`);
    }
    throw new Error(`Error getting cart items: ${error}`);
  }
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
export async function authAndLinkActions({
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
      select: {
        provider: true,
      },
      depth: 0,
    });

    let {
      docs: [user],
    } = await payload.find({
      collection: "users",
      depth: 0,
      where: { email: { equals: email } },
      select: {
        id: true,
        email: true,
        role: true,
        username: true,
        supplier: true,
        carts: true,
      },
    });

    const password = `${provider}-${username}-${env.PAYLOAD_SECRET}`;
    if (!user) {
      user = await payload.create({
        collection: "users",
        depth: 0,
        data: {
          username: username ?? email,
          email,
          password,
          image,
          role: "USER",
        },

        select: {
          id: true,
          email: true,
          role: true,
          username: true,
          supplier: true,
          carts: true,
        },
      });
    }

    let account;
    if (!_.isEmpty(accountdata.docs)) {
      // 4. Update: เลือก return แค่ tokens
      account = await payload.update({
        collection: "accounts",
        id: accountdata.docs[0].id,
        data: { accessToken, refreshToken },
        select: { accessToken: true, refreshToken: true },
      });
    } else {
      // 5. Create Account: เลือก return แค่ tokens
      account = await payload.create({
        collection: "accounts",
        data: {
          provider,
          providerAccountId,
          accessToken,
          refreshToken,
          user: user.id,
        },
        select: { accessToken: true, refreshToken: true },
      });
    }

    if (!account.accessToken) throw new Error("Not found access token");

    const loginResult = await payload.login({
      collection: "users",
      data: { email, password },
      // select: { id: true } // ถ้า Payload version ของคุณรองรับ select ใน login
    });

    return {
      item: user,
      accessToken: account.accessToken as string,
      refetchToken: account.refreshToken as string,
      token: loginResult.token,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error getting cart items: ${error.message}`);
    }
    throw new Error(`Error getting cart items: ${error}`);
  }
}
