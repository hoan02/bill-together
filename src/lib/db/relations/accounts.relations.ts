import { relations } from 'drizzle-orm';
import { accounts } from '../schema/accounts';
import { users } from '../schema/users';

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));
