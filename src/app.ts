import { env } from "./conf/env.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
// routes
import healthRouter from "./routes/health.route.js";
import mailRouter from "./routes/mail.route.js";

const app = express();

const allowedOrigins = env.ACCESS_CONTROL_ORIGIN
  ? env.ACCESS_CONTROL_ORIGIN.split(",").map((o) => o.trim())
  : [];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked for origin ${origin}`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/mail", mailRouter);

export default app;
