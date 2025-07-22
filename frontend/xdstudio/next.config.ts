import { env } from "@/env";
import "@configs/dotenv.config";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: env.API_BACKEND_URL,
      pathname: "/images/**",
    },
    {
      protocol: "http",
      hostname: env.API_BACKEND_URL,
      pathname: "/images/**",
    },
  ],
};
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
