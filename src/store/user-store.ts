import { create } from "zustand";
import { Organization } from "better-auth";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
  } | null;
  organizations: Organization[];
  setUser: (user: UserState["user"]) => void;
  setOrganizations: (organizations: Organization[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  organizations: [],
  setUser: (user) => set({ user }),
  setOrganizations: (organizations) => set({ organizations }),
}));
