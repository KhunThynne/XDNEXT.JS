import express from "express";
import { handler } from "./graphql";
import { handlerAuth } from "./auth/graphql/graphql.auth";
import accessTokenMiddleware from "./middlewares/่jwtauth";
import blockGetAuth from "./middlewares/blockGetAuth";

const controller = express.Router();

controller.all("/auth/graphql", blockGetAuth, handlerAuth);
controller.use(blockGetAuth, accessTokenMiddleware);
controller.all("/graphql", handler);

export default controller;
