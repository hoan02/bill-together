import { pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const organizations = pgTable("organization", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }),
  logo: varchar("logo", { length: 255 }),
  joinCode: varchar("join_code", { length: 255 }).unique().notNull(),
  metadata: text("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
