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
    API_BACKEND_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_AUTH_SECRET: z.string(),
  },
  runtimeEnv: {
    SQL_HOST: process.env.SQL_HOST,
    SQL_USER: process.env.SQL_USER,
    SQL_PASSWORD: process.env.SQL_PASSWORD,
    SQL_DATABASE_NAME: process.env.SQL_DATABASE_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT,
    CODEGEN_TOKEN: process.env.CODEGEN_TOKEN,
    API_BACKEND_URL: process.env.API_BACKEND_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_AUTH_SECRET: process.env.NEXT_PUBLIC_AUTH_SECRET,
  },
});
