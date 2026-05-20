"use client";

import { useCallback, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  type CategoryFilterState,
  DEFAULT_FILTER_STATE,
  parseSearchParams,
  buildSearchParams,
} from "@/lib/category-filters";
import type { ProductSortOption } from "@/types";

export function useCategoryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters: CategoryFilterState = useMemo(() => {
    const obj: Record<string, string | string[] | undefined> = {};
    searchParams.forEach((value, key) => {
      const existing = obj[key];
      if (existing !== undefined) {
        obj[key] = Array.isArray(existing)
          ? [...existing, value]
          : [existing, value];
      } else {
        obj[key] = value;
      }
    });
    return parseSearchParams(obj);
  }, [searchParams]);

  const updateFilters = useCallback(
    (updates: Partial<CategoryFilterState>, resetPage = true) => {
      const newFilters = {
        ...filters,
        ...updates,
        page: resetPage ? 1 : (updates.page ?? filters.page),
      };
      const params = buildSearchParams(newFilters);
      const queryString = params.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`, {
        scroll: false,
      });
    },
    [filters, pathname, router],
  );

  const setSort = useCallback(
    (sort: ProductSortOption) => updateFilters({ sort }),
    [updateFilters],
  );

  const setPage = useCallback(
    (page: number) => updateFilters({ page }, false),
    [updateFilters],
  );

  const setPriceRange = useCallback(
    (minPrice?: number, maxPrice?: number) =>
      updateFilters({ minPrice, maxPrice }),
    [updateFilters],
  );

  const toggleBrand = useCallback(
    (brandSlug: string) => {
      const brands = filters.brands.includes(brandSlug)
        ? filters.brands.filter((b) => b !== brandSlug)
        : [...filters.brands, brandSlug];
      updateFilters({ brands });
    },
    [filters.brands, updateFilters],
  );

  const setInStockOnly = useCallback(
    (inStockOnly: boolean) => updateFilters({ inStockOnly }),
    [updateFilters],
  );

  const setMinRating = useCallback(
    (minRating?: number) => updateFilters({ minRating }),
    [updateFilters],
  );

  const setView = useCallback(
    (view: "grid" | "list") => updateFilters({ view }, false),
    [updateFilters],
  );

  const clearFilters = useCallback(() => {
    const params = buildSearchParams({
      ...DEFAULT_FILTER_STATE,
      view: filters.view,
    });
    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`, {
      scroll: false,
    });
  }, [filters.view, pathname, router]);

  return {
    filters,
    updateFilters,
    setSort,
    setPage,
    setPriceRange,
    toggleBrand,
    setInStockOnly,
    setMinRating,
    setView,
    clearFilters,
  };
}
