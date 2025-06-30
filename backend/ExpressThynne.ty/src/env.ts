import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string(),
  SECRET_KEY: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

const env = {
  DATABASE_URL: parsedEnv.data.DATABASE_URL,
  NODE_ENV: parsedEnv.data.NODE_ENV,
  PORT: parsedEnv.data.PORT ? Number(parsedEnv.data.PORT) : 8080,
  SECRET_KEY: parsedEnv.data.SECRET_KEY,
};

export default env;
