import type { ProductListParams } from "@/types";

export function buildProductUrl(slug: string): string {
  return `/products/${slug}`;
}

export function buildCategoryUrl(slug: string): string {
  return `/categories/${slug}`;
}

export function buildBrandUrl(slug: string): string {
  return `/brands/${slug}`;
}

export function buildSearchUrl(query: string): string {
  return `/search?q=${encodeURIComponent(query)}`;
}

export function buildQueryString(
  params: Partial<ProductListParams>,
): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (typeof value === "object") {
        Object.entries(value as Record<string, string[]>).forEach(
          ([filterKey, filterValues]) => {
            filterValues.forEach((v) => {
              searchParams.append(`filter[${filterKey}]`, v);
            });
          },
        );
      } else {
        searchParams.set(key, String(value));
      }
    }
  });

  const qs = searchParams.toString();
  return qs ? `?${qs}` : "";
}
