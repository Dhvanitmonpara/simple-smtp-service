import { env } from "../src/conf/env.js";
import app from "../src/app.js";
import { VercelRequest, VercelResponse } from "@vercel/node";

const port = env.PORT || 8000;

export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res)
}