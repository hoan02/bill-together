import { pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core";
import { users } from "./users";

export const sessions = pgTable("session", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).references(() => users.id, { onDelete: "cascade" }).notNull(),
  token: varchar("token", { length: 255 }).unique().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  ipAddress: varchar("ip_address", { length: 255 }),
  userAgent: text("user_agent"),
  impersonatedBy: varchar("impersonated_by", { length: 255 }),
  activeOrganizationId: varchar("active_organization_id", { length: 255 }),
});
