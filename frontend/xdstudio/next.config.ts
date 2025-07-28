import "@configs/dotenv.config";
import { env } from "@/env";
import { type NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const backendUrl = new URL(env.API_BACKEND_URL);
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: backendUrl.protocol.replace(":", "") as "http" | "https",
        hostname: backendUrl.hostname,
        pathname: "/images/**",
      },
    ],
  },
} satisfies NextConfig;
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
