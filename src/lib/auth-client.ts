import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, admin, user, myCustomRole } from "@/lib/permissions";
import { env } from "env";

export const authClient = createAuthClient({
  baseURL: env.BETTER_AUTH_URL,
  plugins: [
    adminClient({
      ac,
      roles: {
        admin,
        user,
        myCustomRole,
      },
    }),
    organizationClient(),
  ],
});

export const { 
  signIn,
  signUp,
  signOut,
  useSession,
  forgetPassword,
  resetPassword,
  organization 
} = authClient;
