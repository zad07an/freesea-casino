import { create } from "zustand";

interface SidebarStoreProps {
  isOpenSidebar: boolean;
  onToggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStoreProps>((set) => ({
  isOpenSidebar: false,
  onToggleSidebar: () =>
    set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
}));
