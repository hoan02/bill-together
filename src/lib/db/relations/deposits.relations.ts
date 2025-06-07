import { relations } from 'drizzle-orm';
import { deposits } from '../schema/deposits';
import { organizations } from '../schema/organizations';
import { users } from '../schema/users';

export const depositsRelations = relations(deposits, ({ one }) => ({
  user: one(users, {
    fields: [deposits.userId],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [deposits.organizationId],
    references: [organizations.id],
  }),
}));
