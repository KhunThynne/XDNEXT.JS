"use server";
import { signIn, signOut as authSignOut } from "@/auth";
import { AuthError } from "next-auth";
import type { SignInOptions, SignOutParams } from "next-auth/react";

import { getLocale } from "next-intl/server";

export async function authenticate(
  prevState: string | undefined,
  formData: SignInOptions
) {
  const locale = await getLocale();

  try {
    await signIn(prevState, { ...formData });
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

export async function signOut(params?: SignOutParams) {
  try {
    await authSignOut(params);
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
