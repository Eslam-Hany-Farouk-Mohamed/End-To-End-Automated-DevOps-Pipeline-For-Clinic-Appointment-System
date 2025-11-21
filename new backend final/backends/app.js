// backends/app.js
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { client, metricsMiddleware } from "./metrics.js";

config({ path: "./config/config.env" });

const app = express();

// 🔓 CORS: allow any origin but still support cookies
app.use(
  cors({
    origin: true,           // reflect Origin header
    credentials: true,      // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// Preflight
app.options("*", cors({ origin: true, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// ⏱️ Metrics middleware early to measure all routes
app.use(metricsMiddleware);

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Legacy alias (optional)
app.use("/api/users", userRouter);

// Health
app.get("/health", (req, res) => res.json({ ok: true }));

// /metrics endpoint for Prometheus
app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Single source of truth for DB connection
await dbConnection();

// Error handler
app.use(errorMiddleware);

export default app;
