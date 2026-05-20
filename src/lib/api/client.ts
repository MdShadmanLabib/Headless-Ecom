import type { ApiError, ApiResponse } from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  tags?: string[];
  revalidate?: number | false;
  cache?: RequestCache;
};

class ApiClientError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string,
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const {
    method = "GET",
    body,
    headers = {},
    tags,
    revalidate,
    cache,
  } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const fetchOptions: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  if (tags || revalidate !== undefined) {
    fetchOptions.next = {};
    if (tags) fetchOptions.next.tags = tags;
    if (revalidate !== undefined) fetchOptions.next.revalidate = revalidate;
  }

  if (cache) {
    fetchOptions.cache = cache;
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorData = (await response.json().catch(() => null)) as ApiError | null;
    throw new ApiClientError(
      errorData?.message ?? `Request failed with status ${response.status}`,
      response.status,
      errorData?.code ?? "UNKNOWN_ERROR",
    );
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get<T>(endpoint: string, options?: Omit<RequestOptions, "method" | "body">) {
    return request<T>(endpoint, { ...options, method: "GET" });
  },

  post<T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) {
    return request<T>(endpoint, { ...options, method: "POST", body });
  },

  put<T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) {
    return request<T>(endpoint, { ...options, method: "PUT", body });
  },

  patch<T>(endpoint: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) {
    return request<T>(endpoint, { ...options, method: "PATCH", body });
  },

  delete<T>(endpoint: string, options?: Omit<RequestOptions, "method" | "body">) {
    return request<T>(endpoint, { ...options, method: "DELETE" });
  },
};

export { ApiClientError };
export type { ApiResponse };
