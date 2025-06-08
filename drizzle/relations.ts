import { relations } from "drizzle-orm/relations";
import { user, session, account, member, organization, invitation, bill, billItem, billItemShare, deposit } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	accounts: many(account),
	members: many(member),
	invitations: many(invitation),
	bills: many(bill),
	billItemShares: many(billItemShare),
	deposits: many(deposit),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const memberRelations = relations(member, ({one}) => ({
	user: one(user, {
		fields: [member.userId],
		references: [user.id]
	}),
	organization: one(organization, {
		fields: [member.organizationId],
		references: [organization.id]
	}),
}));

export const organizationRelations = relations(organization, ({many}) => ({
	members: many(member),
	invitations: many(invitation),
	bills: many(bill),
	deposits: many(deposit),
}));

export const invitationRelations = relations(invitation, ({one}) => ({
	organization: one(organization, {
		fields: [invitation.organizationId],
		references: [organization.id]
	}),
	user: one(user, {
		fields: [invitation.inviterId],
		references: [user.id]
	}),
}));

export const billRelations = relations(bill, ({one, many}) => ({
	organization: one(organization, {
		fields: [bill.organizationId],
		references: [organization.id]
	}),
	user: one(user, {
		fields: [bill.createdById],
		references: [user.id]
	}),
	billItems: many(billItem),
}));

export const billItemRelations = relations(billItem, ({one, many}) => ({
	bill: one(bill, {
		fields: [billItem.billId],
		references: [bill.id]
	}),
	billItemShares: many(billItemShare),
}));

export const billItemShareRelations = relations(billItemShare, ({one}) => ({
	billItem: one(billItem, {
		fields: [billItemShare.itemId],
		references: [billItem.id]
	}),
	user: one(user, {
		fields: [billItemShare.userId],
		references: [user.id]
	}),
}));

export const depositRelations = relations(deposit, ({one}) => ({
	organization: one(organization, {
		fields: [deposit.organizationId],
		references: [organization.id]
	}),
	user: one(user, {
		fields: [deposit.userId],
		references: [user.id]
	}),
}));