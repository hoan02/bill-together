import { pgTable, text, timestamp, decimal, boolean } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const bills = pgTable("bills", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  createdById: text("created_by_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const billItems = pgTable("bill_items", {
  id: text("id").primaryKey(),
  billId: text("bill_id")
    .notNull()
    .references(() => bills.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const billItemShares = pgTable("bill_item_shares", {
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
