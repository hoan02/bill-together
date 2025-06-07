"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      attribute="class"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </NextThemesProvider>
  );
}
