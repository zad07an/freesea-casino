import { create } from "zustand";

interface AuthStoreProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onCloseDialog: () => void;
}

export const useAuthStore = create<AuthStoreProps>((set) => ({
  isLoginOpen: false,
  isRegisterOpen: false,
  onOpenLogin: () => set(() => ({ isLoginOpen: true, isRegisterOpen: false })),
  onOpenRegister: () =>
    set(() => ({ isRegisterOpen: true, isLoginOpen: false })),
  onCloseDialog: () =>
    set(() => ({ isLoginOpen: false, isRegisterOpen: false })),
}));
