"use client";

import { useCallback } from "react";
import type { CategoryFilterState } from "@/lib/category-filters";
import { getActiveFilterCount } from "@/lib/category-filters";
import { PriceRangeSlider } from "./price-range-slider";
import { cn } from "@/utils/cn";

interface SidebarFiltersProps {
  filters: CategoryFilterState;
  brands: { slug: string; name: string; count: number }[];
  priceRange: { min: number; max: number };
  onToggleBrand: (slug: string) => void;
  onSetPriceRange: (min?: number, max?: number) => void;
  onSetInStockOnly: (value: boolean) => void;
  onSetMinRating: (value?: number) => void;
  onClearFilters: () => void;
  className?: string;
}

const RATING_OPTIONS = [
  { value: 4, label: "4★ & above" },
  { value: 3, label: "3★ & above" },
  { value: 2, label: "2★ & above" },
];

export function SidebarFilters({
  filters,
  brands,
  priceRange,
  onToggleBrand,
  onSetPriceRange,
  onSetInStockOnly,
  onSetMinRating,
  onClearFilters,
  className,
}: SidebarFiltersProps) {
  const activeCount = getActiveFilterCount(filters);

  const handleRatingChange = useCallback(
    (rating: number) => {
      onSetMinRating(filters.minRating === rating ? undefined : rating);
    },
    [filters.minRating, onSetMinRating],
  );

  return (
    <aside className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-body font-semibold text-text-primary">Filters</h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-caption font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Clear all ({activeCount})
          </button>
        )}
      </div>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <PriceRangeSlider
          min={priceRange.min}
          max={priceRange.max}
          currentMin={filters.minPrice}
          currentMax={filters.maxPrice}
          onChange={onSetPriceRange}
        />
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brand">
        <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
          {brands.map((brand) => (
            <label
              key={brand.slug}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1 transition-colors hover:bg-bg-tertiary"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand.slug)}
                onChange={() => onToggleBrand(brand.slug)}
                className="h-4 w-4 rounded border-border-secondary bg-bg-tertiary text-accent accent-accent focus:ring-accent focus:ring-offset-0"
              />
              <span className="flex-1 text-body-sm text-text-secondary">
                {brand.name}
              </span>
              <span className="text-caption text-text-tertiary">
                ({brand.count})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability">
        <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1 transition-colors hover:bg-bg-tertiary">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onSetInStockOnly(e.target.checked)}
            className="h-4 w-4 rounded border-border-secondary bg-bg-tertiary text-accent accent-accent focus:ring-accent focus:ring-offset-0"
          />
          <span className="text-body-sm text-text-secondary">In Stock Only</span>
        </label>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Rating">
        <div className="space-y-2">
          {RATING_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1 transition-colors hover:bg-bg-tertiary"
            >
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === option.value}
                onChange={() => handleRatingChange(option.value)}
                className="h-4 w-4 border-border-secondary bg-bg-tertiary text-accent accent-accent focus:ring-accent focus:ring-offset-0"
              />
              <span className="flex items-center gap-1 text-body-sm text-text-secondary">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < option.value} />
                  ))}
                </span>
                <span>& up</span>
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border-primary pt-4">
      <h3 className="mb-3 text-body-sm font-medium text-text-primary">
        {title}
      </h3>
      {children}
    </div>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      className={filled ? "text-warning" : "text-text-tertiary"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
