import { relations } from 'drizzle-orm';
import { organizations } from '../schema/organizations';
import { members } from '../schema/members';
import { invitations } from '../schema/invitations';
import { bills } from '../schema/bills';
import { deposits } from '../schema/deposits';

export const organizationsRelations = relations(organizations, ({ many }) => ({
  members: many(members),
  invitations: many(invitations),
  bills: many(bills),
  deposits: many(deposits),
}));
