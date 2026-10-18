import express from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { logger } from "./lib/logger.js";
import { routes } from "./routes/index.js";
import { clerkProxyMiddleware } from "./middlewares/clerkProxyMiddleware.js";

export function createApp() {
  const app = express();

  app.use(pinoHttp({ logger }));
  app.use(cors());
  app.use(express.json({ limit: "8mb" }));
  app.use(clerkProxyMiddleware);

  app.use(routes);

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error(err);
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
  });

  return app;
}
