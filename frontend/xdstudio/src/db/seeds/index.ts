import * as dotenv from "dotenv";

import path from "path";
dotenv.config({
  debug: true,
  //   // quiet: true,
  //   override: false,
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "development"
      ? "../../../../../.env"
      : "../../../../../.env.production"
  ),
});
// import { getPayload } from "@/shared/libs/payload/getPayload";
export const script = async () => {
  //   console.log(args.logger);
  //   const payload = await getPayload();
  //   try {
  //     // ส่งต่อ payload ไปให้ runSeed
  //     // await runSeed(payload);
  //     payload.logger.info("✅ พิกัด Logger ออนไลน์แล้วครับ!");
  //   } catch (err) {
  //     // payload.logger.error("❌ Seed ล้มเหลว");
  //     console.error(err);
  //   }
  //   try {
  //     await runSeed(payload);
  //     payload.logger.info("✅ Seed สำเร็จ!");
  //   } catch (err) {
  //     payload.logger.error("❌ Seed ล้มเหลว");
  //     console.error(err);
  //   }

  // สำคัญ: อย่าลืม exit เพื่อปิด process
  process.exit(0);
};
