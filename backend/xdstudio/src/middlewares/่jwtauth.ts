import env from "@/env";
import { verify } from "jsonwebtoken";
import type { RequestHandler } from "express";
import _ from "lodash";
import prisma from "@prisma";
import { User } from "@prisma/client";
import { publicOperations } from "@/graphql/operation.config";

const accessTokenMiddleware: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { operationName } = req.body;
  console.log('tet',req.body);
  if (publicOperations.includes(operationName)) {
    next();
    return;
  }
  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }
  try {
    const decoded = verify(token, env.JWT_SECRET_KEY) as {
      userId: number;
      id: number;
      role: string;
    };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId ?? decoded.id },
    });
    if (!user) {
      res.status(403).json({ message: "User not found or inactive" });
      return;
    }
    (req as unknown as { user: User }).user = user;
    next();
  } catch (_) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};

export default accessTokenMiddleware;
