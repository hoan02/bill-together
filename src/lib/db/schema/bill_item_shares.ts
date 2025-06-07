import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { billItems } from "./bill_items";
import { users } from "./users";

export const billItemShares = pgTable("bill_item_share", {
  id: varchar("id", { length: 255 }).primaryKey(),
  itemId: varchar("item_id", { length: 255 }).references(() => billItems.id),
  userId: varchar("user_id", { length: 255 }).references(() => users.id),
  amount: integer("amount").notNull(),
});
