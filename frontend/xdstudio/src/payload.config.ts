import "../configs/env.config";
import { env } from "@/env";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

// Collections
import { Users } from "./db/collections/Users";
import { Media } from "./db/collections/Media";
import { Accounts } from "./db/collections/Accounts";
import { Tags } from "./db/collections/Tags";
import { Posts } from "./db/collections/Posts";
import { FAQs } from "./db/collections/FAQs";
import { Suppliers } from "./db/collections/Suppliers";
import { Products } from "./db/collections/Products";
import { Prices } from "./db/collections/Prices";
import { Stocks } from "./db/collections/Stocks";
import { Promotions } from "./db/collections/Promotions";
import { ProductPromotions } from "./db/collections/ProductPromotions";
import { Ratings } from "./db/collections/Ratings";
import { Carts } from "./db/collections/Carts";
import { CartItems } from "./db/collections/CartItems";
import { Orders } from "./db/collections/Orders";
import { OrderItems } from "./db/collections/OrderItems";
import { UserItems } from "./db/collections/UserItems";
import { UserPoints } from "./db/collections/UserPoints";
import { UserPreferences } from "./db/collections/UserPreferences";
import { PointTransactions } from "./db/collections/PointTransactions";

// Globals
import { Settings } from "./db/globals/Settings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  logger: {
    options: {
      level: env.NODE_ENV === "production" ? "info" : "debug",
    },
  },
  admin: {
    components: {},
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

  graphQL: {
    schemaOutputFile: path.resolve(dirname, "./graphql.schema.graphql"),
    disable: false,
  },
  globals: [Settings],
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  bin: [
    {
      key: "seed",
      scriptPath: path.resolve(dirname, "db/seeds/index.ts"),
    },
  ],
  db: postgresAdapter({
    pool: {
      connectionString: env.POSTGRES_URL,
    },
    idType: "uuid",
  }),
  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
  sharp,
  plugins: [],
});
