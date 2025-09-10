import * as dotenv from "dotenv";
import path from "path";
dotenv.config({
  debug: false,
  quiet: true,
  path: path.resolve(__dirname, "../../../.env"),
});
// dotenv.config({
//   debug: false,
//   quiet: true,
//   path: path.resolve(__dirname, "../.env.local"),
// });
