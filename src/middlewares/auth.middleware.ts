import { NextFunction, Request, Response } from "express";
import { env } from "../conf/env.js";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['x-api-token'];
  if (token === env.API_ACCESS_TOKEN) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

export default authMiddleware;