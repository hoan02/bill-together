import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const members = pgTable("member", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).references(() => users.id, { onDelete: "cascade" }).notNull(),
  organizationId: varchar("organization_id", { length: 255 }).references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  role: varchar("role", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
