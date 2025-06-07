import { relations } from 'drizzle-orm';
import { sessions } from '../schema/sessions';
import { users } from '../schema/users';

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
