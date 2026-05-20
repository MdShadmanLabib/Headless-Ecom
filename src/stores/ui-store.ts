import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  isCartDrawerOpen: boolean;
  activeMegaMenu: string | null;
  activeModal: string | null;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
  setActiveMegaMenu: (id: string | null) => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  closeAll: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isCartDrawerOpen: false,
  activeMegaMenu: null,
  activeModal: null,

  openMobileMenu: () =>
    set({ isMobileMenuOpen: true, isSearchOpen: false, isCartDrawerOpen: false }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
      isSearchOpen: false,
      isCartDrawerOpen: false,
    })),
  openSearch: () =>
    set({ isSearchOpen: true, isMobileMenuOpen: false, isCartDrawerOpen: false }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () =>
    set((state) => ({
      isSearchOpen: !state.isSearchOpen,
      isMobileMenuOpen: false,
      isCartDrawerOpen: false,
    })),
  openCartDrawer: () =>
    set({ isCartDrawerOpen: true, isMobileMenuOpen: false, isSearchOpen: false }),
  closeCartDrawer: () => set({ isCartDrawerOpen: false }),
  toggleCartDrawer: () =>
    set((state) => ({
      isCartDrawerOpen: !state.isCartDrawerOpen,
      isMobileMenuOpen: false,
      isSearchOpen: false,
    })),
  setActiveMegaMenu: (id) => set({ activeMegaMenu: id }),
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
  closeAll: () =>
    set({
      isMobileMenuOpen: false,
      isSearchOpen: false,
      isCartDrawerOpen: false,
      activeMegaMenu: null,
      activeModal: null,
    }),
}));
