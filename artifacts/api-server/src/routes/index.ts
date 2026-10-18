import { Router } from "express";
import { healthRouter } from "./health.js";
import { productsRouter } from "./products.js";
import { ordersRouter } from "./orders.js";
import { adminRouter } from "./admin.js";

export const routes = Router();

routes.use("/health", healthRouter);
routes.use("/products", productsRouter);
routes.use("/orders", ordersRouter);
routes.use("/admin", adminRouter);
