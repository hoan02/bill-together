import { pgTable, varchar, text, integer, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { organizations } from "./organizations";

export const bills = pgTable("bill", {
  id: varchar("id", { length: 255 }).primaryKey(),
  organizationId: varchar("organization_id", { length: 255 }).references(() => organizations.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  totalAmount: integer("total_amount").notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  createdById: varchar("created_by_id", { length: 255 }).references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
