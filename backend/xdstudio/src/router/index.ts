import express from "express";
import help_prisma, { prisma_Method } from "../prisma";

const router = express.Router();

router.get("/test", async (req, res) => {
  res.send("Success");
});

router.get("prisma/:model", async (req, res) => {
  const Model = req.params.model;
  try {
    const result = await prisma_Method(Model, help_prisma.Read.findUnique, {
      where: { id: 1 },
    });
    res.json(result);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

export default router;
