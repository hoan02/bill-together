import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const invitations = pgTable("invitation", {
  id: text('id').primaryKey(),
  organizationId: text('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  email: text('email').notNull(),
  role: text('role'),
  status: text('status').default("pending").notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  inviterId: text('inviter_id').notNull().references(() => users.id, { onDelete: 'cascade' })
});
