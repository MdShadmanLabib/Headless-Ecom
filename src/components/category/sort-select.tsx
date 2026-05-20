"use client";

import type { ProductSortOption } from "@/types";
import { SORT_OPTIONS } from "@/lib/category-filters";
import { cn } from "@/utils/cn";

interface SortSelectProps {
  value: ProductSortOption;
  onChange: (value: ProductSortOption) => void;
  className?: string;
}

export function SortSelect({ value, onChange, className }: SortSelectProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <label
        htmlFor="sort-select"
        className="hidden text-body-sm text-text-secondary sm:block"
      >
        Sort by:
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as ProductSortOption)}
        className="rounded-lg border border-border-primary bg-bg-secondary px-3 py-2 text-body-sm text-text-primary outline-none transition-colors focus:border-accent hover:border-border-secondary"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
