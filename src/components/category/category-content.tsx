"use client";

import { useState, useMemo, Suspense } from "react";
import type { Product } from "@/types";
import {
  filterProducts,
  sortProducts,
  paginateProducts,
  extractBrands,
  getPriceRange,
} from "@/lib/category-filters";
import { useCategoryFilters } from "@/hooks/use-category-filters";
import { SidebarFilters } from "./sidebar-filters";
import { MobileFiltersDrawer } from "./mobile-filters-drawer";
import { CategoryToolbar } from "./category-toolbar";
import { ProductGrid } from "./product-grid";
import { Pagination } from "./pagination";

interface CategoryContentProps {
  products: Product[];
  categorySlug: string;
}

function CategoryContentInner({ products, categorySlug }: CategoryContentProps) {
  const {
    filters,
    setSort,
    setPage,
    setPriceRange,
    toggleBrand,
    setInStockOnly,
    setMinRating,
    setView,
    clearFilters,
  } = useCategoryFilters();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const allCategoryProducts = useMemo(
    () => filterProducts(products, { ...filters, brands: [], inStockOnly: false, minPrice: undefined, maxPrice: undefined, minRating: undefined }, categorySlug),
    [products, categorySlug, filters],
  );

  const brands = useMemo(() => extractBrands(allCategoryProducts), [allCategoryProducts]);
  const priceRange = useMemo(() => getPriceRange(allCategoryProducts), [allCategoryProducts]);

  const filtered = useMemo(
    () => filterProducts(products, filters, categorySlug),
    [products, filters, categorySlug],
  );

  const sorted = useMemo(
    () => sortProducts(filtered, filters.sort),
    [filtered, filters.sort],
  );

  const { data: paginatedProducts, pagination } = useMemo(
    () => paginateProducts(sorted, filters.page),
    [sorted, filters.page],
  );

  return (
    <div className="flex gap-6 lg:gap-8">
      {/* Desktop Sidebar */}
      <div className="hidden w-[260px] shrink-0 lg:block">
        <SidebarFilters
          filters={filters}
          brands={brands}
          priceRange={priceRange}
          onToggleBrand={toggleBrand}
          onSetPriceRange={setPriceRange}
          onSetInStockOnly={setInStockOnly}
          onSetMinRating={setMinRating}
          onClearFilters={clearFilters}
        />
      </div>

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        <CategoryToolbar
          filters={filters}
          totalResults={filtered.length}
          sort={filters.sort}
          view={filters.view}
          onSortChange={setSort}
          onViewChange={setView}
          onOpenFilters={() => setIsDrawerOpen(true)}
        />

        <div className="mt-4">
          <ProductGrid products={paginatedProducts} view={filters.view} />
        </div>

        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          onPageChange={setPage}
          className="mt-8"
        />
      </div>

      {/* Mobile Filters Drawer */}
      <MobileFiltersDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        filters={filters}
        brands={brands}
        priceRange={priceRange}
        onToggleBrand={toggleBrand}
        onSetPriceRange={setPriceRange}
        onSetInStockOnly={setInStockOnly}
        onSetMinRating={setMinRating}
        onClearFilters={clearFilters}
        totalResults={filtered.length}
      />
    </div>
  );
}

export function CategoryContent(props: CategoryContentProps) {
  return (
    <Suspense
      fallback={
        <div className="flex gap-6 lg:gap-8">
          <div className="hidden w-[260px] shrink-0 lg:block">
            <div className="space-y-6">
              <div className="h-6 w-20 animate-pulse rounded bg-bg-tertiary" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 animate-pulse rounded bg-bg-tertiary" />
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="h-14 animate-pulse rounded-xl bg-bg-tertiary" />
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-bg-tertiary" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <CategoryContentInner {...props} />
    </Suspense>
  );
}
