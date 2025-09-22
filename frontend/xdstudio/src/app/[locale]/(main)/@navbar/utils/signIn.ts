"use server";
import { signIn } from "@/auth";

type SignInArgs = Parameters<typeof signIn>;

// export wrapper
export default async function login(...args: SignInArgs) {
  return await signIn(...args);
}
