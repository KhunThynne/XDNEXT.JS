// middlewares/blockGetAuth.ts
import { Request, Response, NextFunction } from 'express';

export default function blockGetAuth(req: Request, res: Response, next: NextFunction) {
  if (req.method === 'GET') {
    req.socket.destroy();
    return;
  }

  next();
}
