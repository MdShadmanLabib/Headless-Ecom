import type { SearchResult } from "@/types";
import { apiClient } from "./client";
import { API_ENDPOINTS } from "@/config/constants";

export async function searchProducts(
  query: string,
  limit = 10,
): Promise<SearchResult> {
  return apiClient.get<SearchResult>(
    `${API_ENDPOINTS.search}?q=${encodeURIComponent(query)}&limit=${limit}`,
    { cache: "no-store" },
  );
}
