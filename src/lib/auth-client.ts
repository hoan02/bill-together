import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, admin, user, myCustomRole } from "@/lib/permissions";

export const authClient = createAuthClient({
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
