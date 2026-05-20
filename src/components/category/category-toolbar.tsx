"use client";

import type { ProductSortOption } from "@/types";
import { SortSelect } from "./sort-select";
import { ViewToggle } from "./view-toggle";
import { getActiveFilterCount } from "@/lib/category-filters";
import type { CategoryFilterState } from "@/lib/category-filters";
import { cn } from "@/utils/cn";

interface CategoryToolbarProps {
  filters: CategoryFilterState;
  totalResults: number;
  sort: ProductSortOption;
  view: "grid" | "list";
  onSortChange: (sort: ProductSortOption) => void;
  onViewChange: (view: "grid" | "list") => void;
  onOpenFilters: () => void;
  className?: string;
}

export function CategoryToolbar({
  filters,
  totalResults,
  sort,
  view,
  onSortChange,
  onViewChange,
  onOpenFilters,
  className,
}: CategoryToolbarProps) {
  const activeCount = getActiveFilterCount(filters);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-primary bg-bg-secondary px-4 py-3",
        className,
      )}
    >
      {/* Left: results count + mobile filter button */}
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <button
          type="button"
          onClick={onOpenFilters}
          className="flex items-center gap-2 rounded-lg border border-border-primary px-3 py-2 text-body-sm text-text-secondary transition-colors hover:border-border-secondary hover:text-text-primary lg:hidden"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filters</span>
          {activeCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-semibold text-text-inverse">
              {activeCount}
            </span>
          )}
        </button>

        <span className="text-body-sm text-text-tertiary">
          <span className="font-medium text-text-secondary">{totalResults}</span>{" "}
          {totalResults === 1 ? "product" : "products"}
        </span>
      </div>

      {/* Right: sort + view toggle */}
      <div className="flex items-center gap-3">
        <SortSelect value={sort} onChange={onSortChange} />
        <ViewToggle view={view} onViewChange={onViewChange} />
      </div>
    </div>
  );
}
