import "@configs/dotenv.config";
import { env } from "@/env";
import { type NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const backendUrl = new URL(env.API_BACKEND_URL);
const nextConfig = {
  /**
   * @type {import('next').NextConfig}
   */
  turbopack: {
    // options
  },
  skipProxyUrlNormalize: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: { turbopackFileSystemCacheForDev: true, mcpServer: true },
  trailingSlash: true,
  typedRoutes: false,
  basePath: "",
  // assetPrefix: env.NEXT_PUBLIC_SITE_URL,
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ["shop.xd-tect.com"],
  //   },
  // },
  images: {
    dangerouslyAllowSVG: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: backendUrl.protocol.replace(":", "") as "http" | "https",
        hostname: backendUrl.hostname,
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "*.xd-tect.com",
      },
      {
        protocol: "http",
        hostname: "*.xd-tect.com",
      },
      {
        protocol: "https",
        hostname: "api.omise.co",
      },
    ],
  },
} satisfies NextConfig;
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
