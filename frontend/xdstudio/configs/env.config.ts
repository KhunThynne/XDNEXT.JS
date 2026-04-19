import * as nextEnv from "@next/env";
import type { NextConfig } from "next";
import path from "path";
type NextEnvModule = typeof nextEnv & { default?: typeof nextEnv };
export const MAPING = (): NonNullable<NextConfig["env"]> => {
  return {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.PUBLIC_SITE_URL,
  };
};
const envModule = nextEnv as NextEnvModule;
const { loadEnvConfig} =
  envModule.default || envModule;
const ConfigEnv = () => {
  const workSpace = loadEnvConfig(process.cwd());
  const projectRoot = path.resolve(process.cwd(), "../../");
  loadEnvConfig(
    projectRoot,
    process.env.NODE_ENV !== "production",
    {
      error: (msg) => console.error("Error in loading env", msg),
      info: (msg) => console.info("Info in loading env", msg),
    },
    true
  );
  Object.assign(process.env, workSpace.parsedEnv);
  Object.entries(MAPING()).forEach(([key, value]) => {
    if (value) process.env[key] = value;
  });
};

ConfigEnv();
