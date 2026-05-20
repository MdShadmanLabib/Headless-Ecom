import type {
  Product,
  PaginatedResponse,
  ProductListParams,
  ProductFilterGroup,
} from "@/types";
import { apiClient } from "./client";
import { API_ENDPOINTS, STALE_TIMES } from "@/config/constants";
import { buildQueryString } from "@/utils";

export async function getProducts(
  params?: ProductListParams,
): Promise<PaginatedResponse<Product>> {
  const qs = params ? buildQueryString(params) : "";
  return apiClient.get<PaginatedResponse<Product>>(
    `${API_ENDPOINTS.products}${qs}`,
    {
      tags: ["products"],
      revalidate: STALE_TIMES.products / 1000,
    },
  );
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return apiClient.get<Product>(`${API_ENDPOINTS.products}/${slug}`, {
    tags: [`product-${slug}`],
    revalidate: STALE_TIMES.products / 1000,
  });
}

export async function getProductFilters(
  categorySlug?: string,
): Promise<ProductFilterGroup[]> {
  const qs = categorySlug ? `?category=${categorySlug}` : "";
  return apiClient.get<ProductFilterGroup[]>(
    `${API_ENDPOINTS.products}/filters${qs}`,
    {
      tags: ["product-filters"],
      revalidate: STALE_TIMES.categories / 1000,
    },
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return apiClient.get<Product[]>(`${API_ENDPOINTS.products}/featured`, {
    tags: ["featured-products"],
    revalidate: STALE_TIMES.products / 1000,
  });
}

export async function getRelatedProducts(
  productId: string,
): Promise<Product[]> {
  return apiClient.get<Product[]>(
    `${API_ENDPOINTS.products}/${productId}/related`,
    {
      tags: [`related-${productId}`],
      revalidate: STALE_TIMES.products / 1000,
    },
  );
}
