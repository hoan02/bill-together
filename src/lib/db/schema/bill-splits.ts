import { pgTable, text, timestamp, decimal, boolean } from "drizzle-orm/pg-core";
import { billItems } from "./bill-items";
import { users } from "./users";

export const billSplits = pgTable("bill_splits", {
  id: text("id").primaryKey(),
  billItemId: text("bill_item_id")
    .notNull()
    .references(() => billItems.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  isPaid: boolean("is_paid").default(false).notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
}); 