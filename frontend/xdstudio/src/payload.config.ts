import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

// Collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Accounts } from "./collections/Accounts";
import { Tags } from "./collections/Tags";
import { Posts } from "./collections/Posts";
import { FAQs } from "./collections/FAQs";
import { Suppliers } from "./collections/Suppliers";
import { Products } from "./collections/Products";
import { Prices } from "./collections/Prices";
import { Stocks } from "./collections/Stocks";
import { Promotions } from "./collections/Promotions";
import { ProductPromotions } from "./collections/ProductPromotions";
import { Ratings } from "./collections/Ratings";
import { Carts } from "./collections/Carts";
import { CartItems } from "./collections/CartItems";
import { Orders } from "./collections/Orders";
import { OrderItems } from "./collections/OrderItems";
import { UserItems } from "./collections/UserItems";
import { UserPoints } from "./collections/UserPoints";
import { UserPreferences } from "./collections/UserPreferences";
import { PointTransactions } from "./collections/PointTransactions";

// Globals
import { Settings } from "./globals/Settings";

import { env } from "./env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Accounts,
    Tags,
    Posts,
    FAQs,
    Suppliers,
    Products,
    Prices,
    Stocks,
    Promotions,
    ProductPromotions,
    Ratings,
    Carts,
    CartItems,
    Orders,
    OrderItems,
    UserItems,
    UserPoints,
    UserPreferences,
    PointTransactions,
  ],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
  sharp,
  plugins: [],
});
