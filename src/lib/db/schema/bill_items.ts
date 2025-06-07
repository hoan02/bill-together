import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { bills } from "./bills";

export const billItems = pgTable("bill_item", {
  id: varchar("id", { length: 255 }).primaryKey(),
  billId: varchar("bill_id", { length: 255 }).references(() => bills.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: integer("unit_price").notNull(),
  total: integer("total").default(0),
});
