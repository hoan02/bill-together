"use client";

import { ReactNode, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useUserStore } from "@/store/user-store";

interface DashboardProviderProps {
  children: ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const setUser = useUserStore((state) => state.setUser);
  const session = authClient.useSession();
  const user = session.data?.user;

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return <>{children}</>;
}
