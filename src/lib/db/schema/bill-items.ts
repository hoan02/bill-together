import { pgTable, uuid, varchar, timestamp, decimal } from "drizzle-orm/pg-core";
import { bills } from "./bills";

export const billItems = pgTable("bill_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  billId: uuid("bill_id")
    .notNull()
    .references(() => bills.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}); 