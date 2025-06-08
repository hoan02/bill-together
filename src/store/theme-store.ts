// store/theme-store.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setDarkMode: (value) => set({ isDarkMode: value }),
    }),
    {
      name: "theme-storage",
    }
  )
);
