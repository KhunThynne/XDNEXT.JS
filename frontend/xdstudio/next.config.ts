import "@configs/dotenv.config";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
