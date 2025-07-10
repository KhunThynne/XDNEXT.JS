import express from "express";
import { authMiddleware, handler } from "./graphql";
import { handlerAuth } from "./auth/graphql/graphql.auth";

const controller = express.Router();

controller.all("/auth/graphql", handlerAuth);
controller.use(authMiddleware);
controller.all("/graphql", handler);

export default controller;
