"use client";

import { useEffect, useCallback } from "react";
import type { CategoryFilterState } from "@/lib/category-filters";
import { getActiveFilterCount } from "@/lib/category-filters";
import { SidebarFilters } from "./sidebar-filters";
import { cn } from "@/utils/cn";

interface MobileFiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: CategoryFilterState;
  brands: { slug: string; name: string; count: number }[];
  priceRange: { min: number; max: number };
  onToggleBrand: (slug: string) => void;
  onSetPriceRange: (min?: number, max?: number) => void;
  onSetInStockOnly: (value: boolean) => void;
  onSetMinRating: (value?: number) => void;
  onClearFilters: () => void;
  totalResults: number;
}

export function MobileFiltersDrawer({
  isOpen,
  onClose,
  filters,
  brands,
  priceRange,
  onToggleBrand,
  onSetPriceRange,
  onSetInStockOnly,
  onSetMinRating,
  onClearFilters,
  totalResults,
}: MobileFiltersDrawerProps) {
  const activeCount = getActiveFilterCount(filters);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Product filters"
        onKeyDown={handleKeyDown}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[320px] max-w-[85vw] flex-col bg-bg-secondary transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-primary px-4 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-body font-semibold text-text-primary">
              Filters
            </h2>
            {activeCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-semibold text-text-inverse">
                {activeCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            aria-label="Close filters"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Filters */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <SidebarFilters
            filters={filters}
            brands={brands}
            priceRange={priceRange}
            onToggleBrand={onToggleBrand}
            onSetPriceRange={onSetPriceRange}
            onSetInStockOnly={onSetInStockOnly}
            onSetMinRating={onSetMinRating}
            onClearFilters={onClearFilters}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-border-primary px-4 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-accent py-2.5 text-body-sm font-semibold text-text-inverse transition-colors hover:bg-accent-hover"
          >
            Show {totalResults} {totalResults === 1 ? "result" : "results"}
          </button>
        </div>
      </div>
    </>
  );
}
