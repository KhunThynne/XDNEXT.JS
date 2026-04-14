import path from "path";
import * as nextEnv from "@next/env";
type NextEnvModule = typeof nextEnv & { default?: typeof nextEnv };
const loadWorkspaceEnv = () => {
  const envModule = nextEnv as NextEnvModule;
  const { loadEnvConfig, updateInitialEnv } = envModule.default || envModule;
  if (typeof loadEnvConfig !== "function") {
    console.error("❌ Error next/env loadEnvConfig ");
    return;
  }
  const workspaceRoot = process.cwd();
  const projectRoot = path.resolve(workspaceRoot, "../../");
  const isDev = process.env.NODE_ENV !== "production";
  const rootResult = loadEnvConfig(projectRoot, isDev, undefined, true);
  updateInitialEnv(rootResult.combinedEnv);
  if (process.env.STRIPE_PUBLISHABLE_KEY) {
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
      process.env.STRIPE_PUBLISHABLE_KEY;
  }
};
loadWorkspaceEnv();
