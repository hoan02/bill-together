import { headers } from "next/headers";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
  admin as adminPlugin,
  organization as organizationPlugin,
} from "better-auth/plugins";

import { env } from "env";
import { db } from "./db";
import * as schema from "./db/schema";
import { sendEmail } from "./email";
import { ac, admin, user } from "@/lib/permissions";
import { User } from "@/types/user";


export const auth = betterAuth({
  appName: "Bill Together",
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  database: drizzleAdapter(
    db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      organization: schema.organizations,
      verification: schema.verifications,
      invitation: schema.invitations,
      usePlural: true,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 6,
    maxPasswordLength: 128,
    autoSignIn: false,
    account: {
      accountLinking: {
        enabled: true,
      },
    },
    sendResetPassword: async ({ user, url }) => {
      // Send reset password email

      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
    resetPasswordTokenExpiresIn: 3600, // 1 hour
  },
  socialProviders: {
    // github: {
    //   clientId: env.GITHUB_CLIENT_ID as string,
    //   clientSecret: env.GITHUB_CLIENT_SECRET as string,
    // },
    google: {
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,
    },
    disableSessionRefresh: true,
  },
  advanced: {
    useSecureCookies: env.NODE_ENV === "production",
    defaultCookieAttributes: {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
    },
  },

  plugins: [
    nextCookies(),
    adminPlugin({
      ac,
      roles: {
        admin,
        user,
      },
    }),
    organizationPlugin({
      // allowUserToCreateOrganization: async (user) => {
      //   const subscription = await getSubscription(user.id);
      //   return subscription.plan === "pro";
      // },
    }),
  ],
});

export async function currentUser(): Promise<User> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  return session.user;
}

