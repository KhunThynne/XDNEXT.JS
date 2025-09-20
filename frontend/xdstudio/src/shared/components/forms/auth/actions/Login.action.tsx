"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { SignInOptions } from "next-auth/react";

import { getLocale } from "next-intl/server";

export async function authenticate(
  prevState: string | undefined,
  formData: SignInOptions
) {
  const locale = await getLocale();

  try {
    await signIn("credentials", { ...formData });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
