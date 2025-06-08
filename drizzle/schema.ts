import { pgTable, text, timestamp, unique, varchar, boolean, foreignKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const verification = pgTable("verification", {
	id: text().primaryKey().notNull(),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
});

export const user = pgTable("user", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	emailVerified: boolean("email_verified").default(false),
	image: varchar({ length: 255 }),
	role: varchar({ length: 255 }),
	banned: boolean(),
	banReason: text("ban_reason"),
	banExpires: timestamp("ban_expires", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("user_email_unique").on(table.email),
]);

export const session = pgTable("session", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	token: varchar({ length: 255 }).notNull(),
	expiresAt: timestamp("expires_at", { mode: 'string' }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	ipAddress: varchar("ip_address", { length: 255 }),
	userAgent: text("user_agent"),
	impersonatedBy: varchar("impersonated_by", { length: 255 }),
	activeOrganizationId: varchar("active_organization_id", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "session_user_id_user_id_fk"
		}).onDelete("cascade"),
	unique("session_token_unique").on(table.token),
]);

export const account = pgTable("account", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	accountId: varchar("account_id", { length: 255 }).notNull(),
	providerId: varchar("provider_id", { length: 255 }).notNull(),
	password: text(),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at", { mode: 'string' }),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { mode: 'string' }),
	scope: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "account_user_id_user_id_fk"
		}).onDelete("cascade"),
]);

export const member = pgTable("member", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	organizationId: varchar("organization_id", { length: 255 }).notNull(),
	role: varchar({ length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "member_user_id_user_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.organizationId],
			foreignColumns: [organization.id],
			name: "member_organization_id_organization_id_fk"
		}).onDelete("cascade"),
]);

export const organization = pgTable("organization", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	slug: varchar({ length: 255 }),
	logo: varchar({ length: 255 }),
	joinCode: varchar("join_code", { length: 255 }).notNull(),
	metadata: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("organization_join_code_unique").on(table.joinCode),
]);

export const invitation = pgTable("invitation", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	organizationId: varchar("organization_id", { length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 255 }),
	status: varchar({ length: 255 }).notNull(),
	expiresAt: timestamp("expires_at", { mode: 'string' }).notNull(),
	inviterId: varchar("inviter_id", { length: 255 }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.organizationId],
			foreignColumns: [organization.id],
			name: "invitation_organization_id_organization_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.inviterId],
			foreignColumns: [user.id],
			name: "invitation_inviter_id_user_id_fk"
		}).onDelete("cascade"),
]);

export const bill = pgTable("bill", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	organizationId: varchar("organization_id", { length: 255 }).notNull(),
	title: varchar({ length: 255 }).notNull(),
	description: text(),
	totalAmount: integer("total_amount").notNull(),
	imageUrl: varchar("image_url", { length: 255 }),
	createdById: varchar("created_by_id", { length: 255 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.organizationId],
			foreignColumns: [organization.id],
			name: "bill_organization_id_organization_id_fk"
		}),
	foreignKey({
			columns: [table.createdById],
			foreignColumns: [user.id],
			name: "bill_created_by_id_user_id_fk"
		}),
]);

export const billItem = pgTable("bill_item", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	billId: varchar("bill_id", { length: 255 }).notNull(),
	name: varchar({ length: 255 }).notNull(),
	quantity: integer().notNull(),
	unitPrice: integer("unit_price").notNull(),
	total: integer().default(0),
}, (table) => [
	foreignKey({
			columns: [table.billId],
			foreignColumns: [bill.id],
			name: "bill_item_bill_id_bill_id_fk"
		}),
]);

export const billItemShare = pgTable("bill_item_share", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	itemId: varchar("item_id", { length: 255 }),
	userId: varchar("user_id", { length: 255 }),
	amount: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.itemId],
			foreignColumns: [billItem.id],
			name: "bill_item_share_item_id_bill_item_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "bill_item_share_user_id_user_id_fk"
		}),
]);

export const deposit = pgTable("deposit", {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	organizationId: varchar("organization_id", { length: 255 }),
	userId: varchar("user_id", { length: 255 }),
	amount: integer().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.organizationId],
			foreignColumns: [organization.id],
			name: "deposit_organization_id_organization_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "deposit_user_id_user_id_fk"
		}),
]);
