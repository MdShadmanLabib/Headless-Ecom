import type { Category, CategoryTree } from "@/types";
import { apiClient } from "./client";
import { API_ENDPOINTS, STALE_TIMES } from "@/config/constants";

export async function getCategories(): Promise<Category[]> {
  return apiClient.get<Category[]>(API_ENDPOINTS.categories, {
    tags: ["categories"],
    revalidate: STALE_TIMES.categories / 1000,
  });
}

export async function getCategoryTree(): Promise<CategoryTree[]> {
  return apiClient.get<CategoryTree[]>(`${API_ENDPOINTS.categories}/tree`, {
    tags: ["category-tree"],
    revalidate: STALE_TIMES.categories / 1000,
  });
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  return apiClient.get<Category>(`${API_ENDPOINTS.categories}/${slug}`, {
    tags: [`category-${slug}`],
    revalidate: STALE_TIMES.categories / 1000,
  });
}

export async function getFeaturedCategories(): Promise<Category[]> {
  return apiClient.get<Category[]>(`${API_ENDPOINTS.categories}/featured`, {
    tags: ["featured-categories"],
    revalidate: STALE_TIMES.categories / 1000,
  });
}
