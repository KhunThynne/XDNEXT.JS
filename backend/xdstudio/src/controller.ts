import express from "express";
import router from "@/router";
import createHandler from "@/graphql";

const controller = express.Router();

controller.use((req, res, next) => {
  if (req.headers["secret-key"] !== process.env.SECRET_KEY) return next();
  res.sendStatus(401);
});
controller.all("/graphql", createHandler);
controller.use(router);

export default controller;
