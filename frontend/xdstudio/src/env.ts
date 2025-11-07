import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SQL_HOST: z.string().min(1),
    SQL_USER: z.string().min(1),
    SQL_PASSWORD: z.string().min(1),
    SQL_DATABASE_NAME: z.string().min(1),
    DATABASE_URL: z.string().url(),
    SECRET_KEY: z.string().min(8),
    PORT: z.coerce.number().optional(),
    CODEGEN_TOKEN: z.string(),
    API_BACKEND_URL: z.url(),
    AUTH_DISCORD_CLIENT_SECRET: z.string().optional(),
    AUTH_DISCORD_CLIENT_ID: z.string().optional(),
    XD_CORE_API: z.string(),
    OMISE_PUBLIC_KEY: z.string(),
    OMISE_SECRET_KEY: z.string(),
    NODE_ENV: z.enum(["development", "production"]),

    AUTH_SECRET: z.string().optional(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_PUBLIC_SITE_URL: z.url(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  },
  runtimeEnv: {
    // AUTH_URL: process.env.AUTH_URL,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    API_BACKEND_URL: process.env.API_BACKEND_URL,
    NODE_ENV: process.env.NODE_ENV,
    XD_CORE_API: process.env.XD_CORE_API,
    AUTH_DISCORD_CLIENT_SECRET: process.env.AUTH_DISCORD_CLIENT_SECRET,
    AUTH_DISCORD_CLIENT_ID: process.env.AUTH_DISCORD_CLIENT_ID,
    SQL_HOST: process.env.SQL_HOST,
    SQL_USER: process.env.SQL_USER,
    SQL_PASSWORD: process.env.SQL_PASSWORD,
    SQL_DATABASE_NAME: process.env.SQL_DATABASE_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT,
    CODEGEN_TOKEN: process.env.CODEGEN_TOKEN,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    OMISE_PUBLIC_KEY: process.env.OMISE_PUBLIC_KEY,
    OMISE_SECRET_KEY: process.env.OMISE_SECRET_KEY,
    // ClientSide
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
