import env from "@/env";
import { verify } from "jsonwebtoken";
import type { RequestHandler } from "express";
import _ from "lodash";
import prisma from "@prisma";
import { User } from "@prisma/client";

const accessTokenMiddleware: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const jwt_token = authHeader && authHeader.split(" ")[1];
  if (!jwt_token) {
    res.status(404).json({ error: "Not Found Accecs Token" });
    // req.socket.destroy();
    return;
  }
  try {
    const decoded = verify(jwt_token, env.JWT_ACCESS_SECRET) as {
      documentId: string;
      role: string;
      email: string;
    };
    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });
    if (!user) {
      res.status(403).json({
        message:
          "Access denied. User not found or inactive. Please login and include a valid access token in the Authorization header.",
      });
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
