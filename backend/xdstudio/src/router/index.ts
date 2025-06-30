import { prismaMethod } from "@/prisma";
import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();

router.get("/test", async (req, res) => {
  res.send("Success");
});
router.get("/prisma/:model", async (req, res) => {
  const model = req.params.model as keyof PrismaClient;
  try {
    const result = await prismaMethod(model, "findMany", {});
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

export default router;
