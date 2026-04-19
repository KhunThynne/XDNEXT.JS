import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  // emptyStringAsUndefined: true,
  server: {
    DB_HOST: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASS: z.string().min(1),
    DB_NAME: z.string().min(1),
    DATABASE_URL: z.url(),
    POSTGRES_URL: z.url(),
    SECRET_KEY: z.string().min(8),
    PORT: z.coerce.number().optional(),
    CODEGEN_TOKEN: z.string(),

    XD_CORE_API_URL: z.string(),
    OMISE_PUBLIC_KEY: z.string(),
    OMISE_SECRET_KEY: z.string(),
    NODE_ENV: z.enum(["development", "production"]).default("development"),

    PAYLOAD_SECRET: z.string(),
    AUTH_SECRET: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),

    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    PRIVATE_SITE_URL: z.url(),

    AUTH_DISCORD_CLIENT_SECRET: z.string(),
    AUTH_DISCORD_CLIENT_ID: z.string(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    NEXT_PUBLIC_SITE_URL: z.url(),

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  },

  runtimeEnv: {
    // AUTH_URL: process.env.AUTH_URL,
    PRIVATE_SITE_URL: process.env.PRIVATE_SITE_URL,
    POSTGRES_URL: process.env.POSTGRES_URL,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    XD_CORE_API_URL: process.env.XD_CORE_API_URL,
    AUTH_DISCORD_CLIENT_SECRET: process.env.AUTH_DISCORD_CLIENT_SECRET,
    AUTH_DISCORD_CLIENT_ID: process.env.AUTH_DISCORD_CLIENT_ID,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT,
    CODEGEN_TOKEN: process.env.CODEGEN_TOKEN,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    OMISE_PUBLIC_KEY: process.env.OMISE_PUBLIC_KEY,
    OMISE_SECRET_KEY: process.env.OMISE_SECRET_KEY,
    // ClientSide

    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
