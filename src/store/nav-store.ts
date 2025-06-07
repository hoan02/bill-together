"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavState {
  activeNavKey: string;
  setActiveNavKey: (key: string) => void;
}

export const useNavStore = create<NavState>()(
  persist(
    (set) => ({
      activeNavKey: "Playground", // default active nav key
      setActiveNavKey: (key: string) => set({ activeNavKey: key }),
    }),
    {
      name: "nav-storage",
    }
  )
);
