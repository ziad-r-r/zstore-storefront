import { Router } from "express";
import { db } from "@workspace/db";
import { products } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

export const productsRouter = Router();

productsRouter.get("/", async (_req, res) => {
  const all = await db.select().from(products);
  res.json(all);
});

productsRouter.get("/:id", async (req, res) => {
  const [product] = await db.select().from(products).where(eq(products.id, req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});
