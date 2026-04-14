import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),

  NODE_ENV: z.enum(['development', 'production', 'test']),

  PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 8080)),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_ACCESS_EXPIRES: z
    .string()
    .regex(/^\d+[smhd]$/, {
      message: 'Must be a valid ms string (e.g. 15m, 7d, 1h)',
    })
    .default('15m'),
  JWT_REFRESH_EXPIRES: z
    .string()
    .regex(/^\d+[smhd]$/, {
      message: 'Must be a valid ms string (e.g. 7d, 30m)',
    })
    .default('15m'),
  SECRET_KEY: z.string(),
  DB_HOST: z.string().default('localhost'),
  DB_USER: z.string().default('root'),
  DB_PASS: z.string().default('root'),
  DB_NAME: z.string().default('xdstudio'),
  DATABASE_PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 33061)),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  process.exit(1);
}

const env = {
  DATABASE_URL: parsedEnv.data.DATABASE_URL,
  NODE_ENV: parsedEnv.data.NODE_ENV,
  PORT: parsedEnv.data.PORT,
  SECRET_KEY: parsedEnv.data.SECRET_KEY,
  JWT_ACCESS_SECRET: parsedEnv.data.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: parsedEnv.data.JWT_REFRESH_SECRET,
  JWT_ACCESS_EXPIRES: parsedEnv.data.JWT_ACCESS_EXPIRES,
  JWT_REFRESH_EXPIRES: parsedEnv.data.JWT_REFRESH_EXPIRES,
  DB_HOST: parsedEnv.data.DB_HOST,
  DB_USER: parsedEnv.data.DB_USER,
  DB_PASS: parsedEnv.data.DB_PASS,
  DB_NAME: parsedEnv.data.DB_NAME,
  DATABASE_PORT: parsedEnv.data.DATABASE_PORT,
};

export default env;
