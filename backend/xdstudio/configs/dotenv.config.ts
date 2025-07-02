import path from "path";
import * as dotenv from "dotenv";
// dotenv.config({
//   debug: false,
//   quiet: true,
//   path: path.resolve(__dirname, "../../../.env"),
// });

dotenv.config({
  path: path.resolve(process.cwd(), "../../.env"),
  debug: false,
  quiet: true,
});
