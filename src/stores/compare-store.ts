import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COMPARE_MAX_ITEMS } from "@/config/constants";

interface CompareItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  categorySlug: string;
}

interface CompareState {
  items: CompareItem[];
  isOpen: boolean;

  addItem: (item: CompareItem) => boolean;
  removeItem: (productId: string) => void;
  clearAll: () => void;
  togglePanel: () => void;
  isInCompare: (productId: string) => boolean;
  isFull: () => boolean;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const state = get();
        if (state.items.length >= COMPARE_MAX_ITEMS) return false;
        if (state.items.some((i) => i.productId === item.productId))
          return false;

        set({ items: [...state.items, item] });
        return true;
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        }));
      },

      clearAll: () => set({ items: [] }),
      togglePanel: () => set((state) => ({ isOpen: !state.isOpen })),
      isInCompare: (productId) =>
        get().items.some((i) => i.productId === productId),
      isFull: () => get().items.length >= COMPARE_MAX_ITEMS,
    }),
    {
      name: "techvault-compare",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
