import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import "#/configs/dotenv.config";

const nextConfig: NextConfig = {};
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
