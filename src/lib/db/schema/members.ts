import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const members = pgTable("member", {
  id: text('id').primaryKey(),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  role: text('role').default("member").notNull(),
  createdAt: timestamp('created_at').notNull()
});
