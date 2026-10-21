import { pgTable, text, integer, jsonb, timestamp } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: text("id").primaryKey(),
  orderNumber: text("order_number").notNull().unique(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  city: text("city"),
  status: text("status").notNull().default("pending"),
  items: jsonb("items").$type<Array<{ productId: string; name: string; color: string; size: string; qty: number; price: number }>>().notNull(),
  total: integer("total").notNull(),
  deliveryFee: integer("delivery_fee").default(80),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
