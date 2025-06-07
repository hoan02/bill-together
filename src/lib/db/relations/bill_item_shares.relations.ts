import { relations } from 'drizzle-orm';
import { billItemShares } from '../schema/bill_item_shares';
import { billItems } from '../schema/bill_items';
import { users } from '../schema/users';

export const billItemSharesRelations = relations(billItemShares, ({ one }) => ({
  item: one(billItems, {
    fields: [billItemShares.itemId],
    references: [billItems.id],
  }),
  user: one(users, {
    fields: [billItemShares.userId],
    references: [users.id],
  }),
}));
