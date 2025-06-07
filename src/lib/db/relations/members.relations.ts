import { relations } from 'drizzle-orm';
import { members } from '../schema/members';
import { users } from '../schema/users';
import { organizations } from '../schema/organizations';

export const membersRelations = relations(members, ({ one }) => ({
  user: one(users, {
    fields: [members.userId],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [members.organizationId],
    references: [organizations.id],
  }),
}));
