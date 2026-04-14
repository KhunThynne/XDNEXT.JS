import path from "path";
import * as nextEnv from "@next/env";
type NextEnvModule = typeof nextEnv & { default?: typeof nextEnv };
const MAPING = () => {
  const aliasSchema = {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.PUBLIC_SITE_URL,
  } as const;

  Object.entries(aliasSchema).forEach(([key, value]) => {
    if (value) process.env[key] = value;
  });
};
const ConfigEnv = () => {
  const envModule = nextEnv as NextEnvModule;
  const { loadEnvConfig } = envModule.default || envModule;
  const projectRoot = path.resolve(process.cwd(), "../../");
  const { combinedEnv } = loadEnvConfig(
    projectRoot,
    process.env.NODE_ENV !== "production",
    {
      error: (msg) => console.error("Error in loading env", msg),
      info: (msg) => console.info("Info in loading env", msg),
    },
    true
  );
  Object.assign(process.env, combinedEnv);
  MAPING();
};

ConfigEnv();
