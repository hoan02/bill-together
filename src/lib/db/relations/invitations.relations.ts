import { relations } from 'drizzle-orm';
import { invitations } from '../schema/invitations';
import { users } from '../schema/users';
import { organizations } from '../schema/organizations';

export const invitationsRelations = relations(invitations, ({ one }) => ({
  user: one(users, {
    fields: [invitations.inviterId],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [invitations.organizationId],
    references: [organizations.id],
  }),
}));
