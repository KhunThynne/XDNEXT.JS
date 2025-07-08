import prisma from "@prisma";
import express from "express";

const router = express.Router();

router.get("/test", async (req, res) => {
  console.log(await prisma.user.count());
  res.send("Success");
});

// router.get("/prisma/:model", async (req, res) => {
//   const model = req.params.model as keyof PrismaClient;

//   try {
//     // ตรวจสอบว่า model นั้นสามารถใช้งานได้
//     if (!(model in prisma)) {
//       return res.status(400).json({
//         error: `Model "${model.toString()}" does not exist in PrismaClient.`,
//       });
//     }

//     const fn = (prisma[model] as any).findMany;
//     if (typeof fn !== "function") {
//       return res.status(400).json({
//         error: `Model "${model.toString()}" does not support findMany.`,
//       });
//     }

//     const result = await fn();
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred while fetching data." });
//   }
// });

export default router;
