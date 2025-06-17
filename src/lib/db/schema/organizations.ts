import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const organizations = pgTable("organization", {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  slug: text('slug').unique(),
  logo: text('logo'),
  createdAt: timestamp('created_at').notNull(),
  metadata: text('metadata'),
  inviteCode: text('invite_code'),
  createdById: text('created_by_id')
});
