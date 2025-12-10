"use server";
import { signIn as authSignIn, signOut as authSignOut } from "@/auth";
import { AuthError } from "next-auth";
import type { SignInOptions, SignOutParams } from "next-auth/react";

/**
 * 🔑 Server Action to handle user sign-in.
 * It catches AuthError types and returns a specific message for use with useFormState.
 * * @param prevState The previous state (often an error message string from useFormState).
 * @param formData The data or options for sign-in (e.g., username/password for credentials).
 * @returns An error message string if sign-in fails, otherwise it attempts a redirect or throws.
 */
export async function signIn(
  prevState?: string,
  formData?: SignInOptions | FormData // Use FormData if connecting directly to a form
) {
  try {
    // Auth.js (v5) will throw an error if sign-in fails (e.g., bad credentials).
    await authSignIn(prevState, { ...formData });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          // Specific message for credential failure
          return "Invalid credentials. Please check your email and password.";
        default:
          // Generic message for other authentication errors (e.g., OAuth issues)
          return "Something went wrong during sign-in. Please try again.";
      }
    }
    // Re-throw non-AuthErrors (e.g., network issues)
    throw error;
  }
}

// ---

/**
 * 🚪 Server Action to handle user sign-out.
 * It's kept simple as Auth.js manages session clearing and redirection automatically.
 * * @param params Options for sign-out (e.g., redirect URL).
 */
export async function signOut(params?: SignOutParams) {
  // Sign-out action. No need for try/catch or AuthError handling here,
  // as it rarely fails and the goal is just to clear the session and redirect.
  await authSignOut(params);
}
