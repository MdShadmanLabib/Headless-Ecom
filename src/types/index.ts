export type * from "./product";
export type * from "./category";
export type * from "./cart";
export type * from "./user";

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface SearchResult {
  products: {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    category: string;
  }[];
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  totalResults: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
