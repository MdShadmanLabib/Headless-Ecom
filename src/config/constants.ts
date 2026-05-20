export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;

export const PRODUCTS_PER_PAGE = 24;
export const SEARCH_DEBOUNCE_MS = 300;
export const CART_MAX_QUANTITY = 10;
export const COMPARE_MAX_ITEMS = 4;
export const RECENT_SEARCHES_MAX = 10;

export const IMAGE_SIZES = {
  thumbnail: { width: 80, height: 80 },
  card: { width: 280, height: 280 },
  productDetail: { width: 600, height: 600 },
  banner: { width: 1440, height: 480 },
  category: { width: 400, height: 300 },
  og: { width: 1200, height: 630 },
} as const;

export const STALE_TIMES = {
  products: 5 * 60 * 1000,
  categories: 10 * 60 * 1000,
  cart: 0,
  user: 5 * 60 * 1000,
} as const;

export const API_ENDPOINTS = {
  products: "/products",
  categories: "/categories",
  brands: "/brands",
  cart: "/cart",
  orders: "/orders",
  user: "/user",
  search: "/search",
  auth: "/auth",
} as const;
