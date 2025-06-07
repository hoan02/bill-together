import { relations } from 'drizzle-orm';
import { bills } from '../schema/bills';
import { users } from '../schema/users';
import { organizations } from '../schema/organizations';
import { billItems } from '../schema/bill_items';

export const billsRelations = relations(bills, ({ one, many }) => ({
  createdByUser: one(users, {
    fields: [bills.createdById],
    references: [users.id],
  }),
  organization: one(organizations, {
    fields: [bills.organizationId],
    references: [organizations.id],
  }),
  items: many(billItems),
}));
