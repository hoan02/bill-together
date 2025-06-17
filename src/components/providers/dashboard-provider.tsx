"use client";

import { ReactNode, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useUserStore } from "@/store/user-store";
import { ThemeProvider } from "next-themes";

interface DashboardProviderProps {
  children: ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const setUser = useUserStore((state) => state.setUser);
  const session = authClient.useSession();
  const user = session.data?.user;

  useEffect(() => {
    if (user) {
      setUser({
        ...user,
        image: user.image ?? undefined,
      });
    }
  }, [user, setUser]);

  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
