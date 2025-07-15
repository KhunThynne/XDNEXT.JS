import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  SHADOW_DATABASE_URL: z.string().url(),
  // NODE_ENV: z.enum(['development', 'production', 'test']),

  SESSION_SECRET: z.string(),
  PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 8080)),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  ACCESS_TOKEN_EXPIRE: z
    .string()
    .regex(/^\d+[smhd]$/, {
      message: 'Must be a valid ms string (e.g. 15m, 7d, 1h)'
    })
    .default('15m'),
  REFRESH_TOKEN_EXPIRE: z
    .string()
    .regex(/^\d+[smhd]$/, {
      message: 'Must be a valid ms string (e.g. 7d, 30m)'
    })
    .default('15m'),
  SECRET_KEY: z.string(),
  SQL_HOST: z.string().default('localhost'),
  SQL_USER: z.string().default('root'),
  SQL_PASSWORD: z.string().default('root'),
  SQL_DATABASE_NAME: z.string().default('xdstudio'),
  DATABASE_PORT: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : 33061))
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format())
  process.exit(1)
}

const env = {
  DATABASE_URL: parsedEnv.data.DATABASE_URL,
  SHADOW_DATABASE_URL: parsedEnv.data.SHADOW_DATABASE_URL,
  // NODE_ENV: parsedEnv.data.NODE_ENV,
  PORT: parsedEnv.data.PORT,
  SECRET_KEY: parsedEnv.data.SECRET_KEY,
  JWT_ACCESS_SECRET: parsedEnv.data.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: parsedEnv.data.JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRE: parsedEnv.data.ACCESS_TOKEN_EXPIRE,
  REFRESH_TOKEN_EXPIRE: parsedEnv.data.REFRESH_TOKEN_EXPIRE,
  SQL_HOST: parsedEnv.data.SQL_HOST,
  SQL_USER: parsedEnv.data.SQL_USER,
  SQL_PASSWORD: parsedEnv.data.SQL_PASSWORD,
  SQL_DATABASE_NAME: parsedEnv.data.SQL_DATABASE_NAME,
  DATABASE_PORT: parsedEnv.data.DATABASE_PORT,
  SESSION_SECRET: parsedEnv.data.DATABASE_PORT
}

export default env
