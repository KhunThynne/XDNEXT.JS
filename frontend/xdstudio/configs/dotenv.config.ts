import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  debug: false,
  // quiet: true,
  override: false,
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "development"
      ? "../../../.env"
      : "../../../.env.production"
  ),
});
if (process.env.STRIPE_PUBLISHABLE_KEY) {
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
    process.env.STRIPE_PUBLISHABLE_KEY;
}
// dotenv.config({
//   debug: false,
//   quiet: true,
//   path: path.resolve(__dirname, "../.env.local"),
// });
