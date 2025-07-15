import z from "zod";

export const ZSignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password must not exceed 10 characters"),
  // .regex(/[A-Z]/, "Must include at least one uppercase letter")
  // .regex(/\d/, "Must include at least one number"),
});

export type TypeSignInInterface = z.infer<typeof ZSignInSchema>;
