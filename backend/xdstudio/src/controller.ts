import express from "express";
import createHandler from "@/graphql";

const controller = express.Router();

// controller.use((req, res, next) => {
//   if (req.headers["secret-key"] !== process.env.SECRET_KEY) return next();
//   res.sendStatus(401);
// });
// controller.use(prisma);
controller.all("/graphql", createHandler);

export default controller;
