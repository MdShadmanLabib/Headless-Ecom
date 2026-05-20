import type { Product, ProductSortOption } from "@/types";

export interface CategoryFilterState {
  sort: ProductSortOption;
  page: number;
  minPrice?: number;
  maxPrice?: number;
  brands: string[];
  inStockOnly: boolean;
  minRating?: number;
  view: "grid" | "list";
}

export const DEFAULT_FILTER_STATE: CategoryFilterState = {
  sort: "default",
  page: 1,
  brands: [],
  inStockOnly: false,
  view: "grid",
};

export const PRODUCTS_PER_PAGE = 12;

export const SORT_OPTIONS: { value: ProductSortOption; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "newest", label: "Newest First" },
  { value: "rating", label: "Highest Rated" },
];

export function parseSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): CategoryFilterState {
  const sort = (searchParams.sort as ProductSortOption) || "default";
  const page = parseInt(String(searchParams.page || "1"), 10) || 1;
  const minPrice = searchParams.minPrice
    ? parseInt(String(searchParams.minPrice), 10)
    : undefined;
  const maxPrice = searchParams.maxPrice
    ? parseInt(String(searchParams.maxPrice), 10)
    : undefined;
  const brandsParam = searchParams.brands;
  const brands = brandsParam
    ? Array.isArray(brandsParam)
      ? brandsParam
      : brandsParam.split(",")
    : [];
  const inStockOnly = searchParams.inStock === "true";
  const minRating = searchParams.minRating
    ? parseFloat(String(searchParams.minRating))
    : undefined;
  const view = (searchParams.view as "grid" | "list") || "grid";

  return { sort, page, minPrice, maxPrice, brands, inStockOnly, minRating, view };
}

export function buildSearchParams(
  filters: Partial<CategoryFilterState>,
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.sort && filters.sort !== "default") {
    params.set("sort", filters.sort);
  }
  if (filters.page && filters.page > 1) {
    params.set("page", String(filters.page));
  }
  if (filters.minPrice !== undefined) {
    params.set("minPrice", String(filters.minPrice));
  }
  if (filters.maxPrice !== undefined) {
    params.set("maxPrice", String(filters.maxPrice));
  }
  if (filters.brands && filters.brands.length > 0) {
    params.set("brands", filters.brands.join(","));
  }
  if (filters.inStockOnly) {
    params.set("inStock", "true");
  }
  if (filters.minRating !== undefined) {
    params.set("minRating", String(filters.minRating));
  }
  if (filters.view && filters.view !== "grid") {
    params.set("view", filters.view);
  }

  return params;
}

export function filterProducts(
  products: Product[],
  filters: CategoryFilterState,
  categorySlug: string,
): Product[] {
  let filtered = products.filter(
    (p) =>
      p.category.slug === categorySlug ||
      categorySlug === "components" ||
      categorySlug === "gaming" ||
      categorySlug === "accessories",
  );

  if (filters.brands.length > 0) {
    filtered = filtered.filter((p) => filters.brands.includes(p.brand.slug));
  }

  if (filters.inStockOnly) {
    filtered = filtered.filter((p) => p.inStock);
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.minRating !== undefined) {
    filtered = filtered.filter(
      (p) => p.rating !== undefined && p.rating >= filters.minRating!,
    );
  }

  return filtered;
}

export function sortProducts(
  products: Product[],
  sort: ProductSortOption,
): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "newest":
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;
    case "rating":
      sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    default:
      break;
  }

  return sorted;
}

export function paginateProducts(
  products: Product[],
  page: number,
  perPage: number = PRODUCTS_PER_PAGE,
) {
  const total = products.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const data = products.slice(start, start + perPage);

  return {
    data,
    pagination: {
      page: safePage,
      limit: perPage,
      total,
      totalPages,
      hasNext: safePage < totalPages,
      hasPrev: safePage > 1,
    },
  };
}

export function extractBrands(products: Product[]): { slug: string; name: string; count: number }[] {
  const brandMap = new Map<string, { name: string; count: number }>();

  for (const product of products) {
    const existing = brandMap.get(product.brand.slug);
    if (existing) {
      existing.count++;
    } else {
      brandMap.set(product.brand.slug, { name: product.brand.name, count: 1 });
    }
  }

  return Array.from(brandMap.entries())
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPriceRange(products: Product[]): { min: number; max: number } {
  if (products.length === 0) return { min: 0, max: 100000 };
  const prices = products.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function getActiveFilterCount(filters: CategoryFilterState): number {
  let count = 0;
  if (filters.brands.length > 0) count++;
  if (filters.inStockOnly) count++;
  if (filters.minPrice !== undefined) count++;
  if (filters.maxPrice !== undefined) count++;
  if (filters.minRating !== undefined) count++;
  return count;
}
