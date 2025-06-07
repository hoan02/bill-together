import { pgTable, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const deposits = pgTable("deposit", {
  id: varchar("id", { length: 255 }).primaryKey(),
  organizationId: varchar("organization_id", { length: 255 }).references(() => organizations.id),
  userId: varchar("user_id", { length: 255 }).references(() => users.id),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
