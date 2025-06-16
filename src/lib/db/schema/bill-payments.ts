import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { bills } from "./bills";
import { users } from "./users";

export const billPayments = pgTable("bill_payments", {
  id: text("id").primaryKey(),
  billId: text("bill_id").references(() => bills.id, { onDelete: "cascade" }).notNull(),
  payerId: text("payer_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
}); 