import { createAuthClient } from "better-auth/react";
import { adminClient, organizationClient } from "better-auth/client/plugins";
import { ac, admin, user, myCustomRole } from "@/lib/permissions";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL || "http://localhost:3000",
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
