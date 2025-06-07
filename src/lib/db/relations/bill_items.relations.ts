import { relations } from 'drizzle-orm';
import { billItems } from '../schema/bill_items';
import { bills } from '../schema/bills';
import { billItemShares } from '../schema/bill_item_shares';

export const billItemsRelations = relations(billItems, ({ one, many }) => ({
  bill: one(bills, {
    fields: [billItems.billId],
    references: [bills.id],
  }),
  shares: many(billItemShares),
}));
