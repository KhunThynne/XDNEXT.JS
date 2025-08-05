"use server";
import { signIn } from "@/auth";
import { redirect as RedirectI18n } from "@navigation";
import { AuthError } from "next-auth";

import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export default async function loginAction(
  providers: string,
  { callbackUrl, email, password }: any
) {
  const locale = await getLocale();
  console.log("TEST", locale, callbackUrl);
  try {
    await signIn("credentials", {
      callbackUrl,
      redirect: false,
      email: email,
      password: password,
    });
    return RedirectI18n({ href: callbackUrl, locale });
  } catch (err) {
    console.log(err);
    if (err instanceof AuthError) {
      return RedirectI18n({ href: `error?error=${err.type}`, locale });
    }
    throw err;
  }
}
export async function test(pathname: string) {
  const locale = await getLocale();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  
  RedirectI18n({ href: normalizedPathname, locale });
}
