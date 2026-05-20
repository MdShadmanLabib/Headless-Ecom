export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  sku: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  currency: string;
  images: ProductImage[];
  category: CategoryReference;
  brand: BrandReference;
  specifications: ProductSpecification[];
  inStock: boolean;
  stockCount?: number;
  rating?: number;
  reviewCount?: number;
  tags: string[];
  badges: ProductBadge[];
  warranty?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
}

export interface ProductSpecification {
  group: string;
  items: SpecificationItem[];
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface ProductBadge {
  type: "sale" | "new" | "hot" | "limited" | "emi";
  label: string;
}

export interface CategoryReference {
  id: string;
  slug: string;
  name: string;
}

export interface BrandReference {
  id: string;
  slug: string;
  name: string;
  logo?: string;
}

export interface ProductListParams {
  page?: number;
  limit?: number;
  sort?: ProductSortOption;
  categorySlug?: string;
  brandSlug?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  filters?: Record<string, string[]>;
}

export type ProductSortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "newest"
  | "rating";

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ProductFilterGroup {
  id: string;
  label: string;
  type: "checkbox" | "range" | "radio";
  options: FilterOption[];
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}
