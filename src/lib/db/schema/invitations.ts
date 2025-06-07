import { pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core";
import { organizations } from "./organizations";
import { users } from "./users";

export const invitations = pgTable("invitation", {
  id: varchar("id", { length: 255 }).primaryKey(),
  organizationId: varchar("organization_id", { length: 255 }).references(() => organizations.id, { onDelete: "cascade" }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }),
  status: varchar("status", { length: 255 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  inviterId: varchar("inviter_id", { length: 255 }).references(() => users.id, { onDelete: "cascade" }).notNull(),
});
