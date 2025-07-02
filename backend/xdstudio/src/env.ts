import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),

  NODE_ENV: z.enum(["development", "production", "test"]),

  PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 8080)),

  SECRET_KEY: z.string(),
  SQL_HOST: z.string().default("localhost"),
  SQL_USER: z.string().default("root"),
  SQL_PASSWORD: z.string().default("root"),
  SQL_DATABASE_NAME: z.string().default("xdstudio"),
  DATABASE_PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 33061)),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

const env = {
  DATABASE_URL: parsedEnv.data.DATABASE_URL,
  NODE_ENV: parsedEnv.data.NODE_ENV,
  PORT: parsedEnv.data.PORT,
  SECRET_KEY: parsedEnv.data.SECRET_KEY,
  SQL_HOST: parsedEnv.data.SQL_HOST,
  SQL_USER: parsedEnv.data.SQL_USER,
  SQL_PASSWORD: parsedEnv.data.SQL_PASSWORD,
  SQL_DATABASE_NAME: parsedEnv.data.SQL_DATABASE_NAME,
  DATABASE_PORT: parsedEnv.data.DATABASE_PORT,
};

export default env;
