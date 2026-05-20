# Architecture Overview

## Sitemap (Inspired by startech.com.bd)

```
/                          → Home (hero, featured categories, featured products, deals)
/products/[slug]           → Product detail page
/categories/[slug]         → Category listing with filters
/brands/[slug]             → Brand listing page
/search?q=...              → Search results
/deals                     → Deals and offers
/compare                   → Product comparison (up to 4)
/pc-builder                → PC Builder tool
/cart                      → Shopping cart
/checkout                  → Multi-step checkout
/order-tracking            → Order tracking
/login                     → User login
/register                  → User registration
/forgot-password           → Password reset
/profile                   → User profile
/orders                    → Order history
/orders/[id]               → Order detail
/wishlist                  → Saved products
/addresses                 → Address management
/api/health                → Health check endpoint
```

## Component Inventory

### Layout Components
- `Header` — Top bar, logo, search, nav, cart/compare/account actions
- `Footer` — Links, social, payment methods, copyright
- `Container` — Responsive max-width container with padding
- `Section` — Reusable section wrapper with title/subtitle/action
- `Grid` — Configurable responsive grid
- `SidebarLayout` — Content + sidebar layout (for category pages)

### UI Components (Design System)
- `Button` — Primary, secondary, ghost, outline, danger, link variants
- `Badge` — Default, accent, sale, new, hot, success, outline
- `Input` — Text input with error state
- `Card` — Card with header, content, footer slots

### Common Components
- `Breadcrumb` — Navigation breadcrumb
- `EmptyState` — Empty state with icon, title, description, action
- `PriceDisplay` — Price with original price, discount badge, save amount

### Skeleton Components (Loading States)
- `ProductCardSkeleton`
- `ProductGridSkeleton`
- `CategoryCardSkeleton`
- `BannerSkeleton`
- `SidebarFilterSkeleton`

### Planned Domain Components (for future sessions)
- `ProductCard` — Product listing card with image, name, price, actions
- `ProductGallery` — Image gallery with thumbnails
- `ProductSpecifications` — Spec table grouped by category
- `CategoryCard` — Category card with icon/image
- `SearchBar` — Global search with autocomplete
- `FilterSidebar` — Category page filter panel
- `CartDrawer` — Slide-out cart panel
- `CompareBar` — Floating compare bar
- `MegaMenu` — Desktop navigation mega menu
- `MobileMenu` — Mobile navigation drawer

## Responsive Strategy

| Breakpoint | Width  | Target          | Layout Strategy                    |
|-----------|--------|-----------------|-------------------------------------|
| Default   | <640px | Mobile          | Single column, stacked, hamburger   |
| sm        | 640px  | Large mobile    | 2-column grids                      |
| md        | 768px  | Tablet          | 3-column grids, search visible      |
| lg        | 1024px | Small desktop   | 4-column grids, sidebar visible     |
| xl        | 1280px | Desktop         | Full nav, full layout               |
| 2xl       | 1440px | Large desktop   | Max-width container, centered       |

### Mobile-First Patterns
- Navigation collapses to hamburger below `lg`
- Search bar hidden on mobile, icon trigger
- Product grids: 1 col → 2 → 3 → 4
- Sidebar filters: drawer on mobile, static on desktop
- Footer columns stack on mobile
- Cart page: single column on mobile, two columns on desktop

## Server/Client Boundary Strategy

### Server Components (default)
- All page components
- Layout components (Header, Footer)
- Product listing/detail data fetching
- Category tree rendering
- SEO metadata generation

### Client Components ('use client')
- Interactive UI (buttons with state, modals, dropdowns)
- Search bar with autocomplete
- Cart drawer & cart interactions
- Compare bar
- Mobile menu
- Filter sidebar interactions
- Image gallery with zoom/swipe
- Quantity selectors
- All custom hooks
- Zustand stores
- React Query provider

### Data Flow
```
Server Component (page/layout)
  → fetch data via api layer (with ISR/caching)
  → pass data as props to Client Components
  → Client Components handle interactivity
```
