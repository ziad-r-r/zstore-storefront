import { pgTable, text, integer, jsonb, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(), // in Egyptian pounds (cents or whole?)
  image: text("image"), // data URL
  colors: jsonb("colors").$type<string[]>().default([]),
  sizes: jsonb("sizes").$type<string[]>().default([]),
  stock: integer("stock").default(0),
  variants: jsonb("variants").$type<Array<{ color: string; size: string; stock: number }>>().default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
