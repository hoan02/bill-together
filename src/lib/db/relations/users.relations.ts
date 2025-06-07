import { relations } from 'drizzle-orm';
import { users } from '../schema/users';
import { accounts } from '../schema/accounts';
import { sessions } from '../schema/sessions';
import { bills } from '../schema/bills';
import { billItemShares } from '../schema/bill_item_shares';
import { deposits } from '../schema/deposits';
import { members } from '../schema/members';
import { invitations } from '../schema/invitations';

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  bills: many(bills),
  billItemShares: many(billItemShares),
  deposits: many(deposits),
  members: many(members),
  invitations: many(invitations),
}));
