# TechVault — Headless Ecommerce Frontend

A production-grade headless ecommerce frontend built with Next.js 15, featuring a premium dark theme inspired by Nvidia, Razer, and Linear design aesthetics.

## Tech Stack

| Layer          | Technology                          |
|---------------|-------------------------------------|
| Framework     | Next.js 15 (App Router)            |
| Language      | TypeScript (strict mode)           |
| Styling       | Tailwind CSS v4                    |
| UI Components | Custom design system + ShadCN-style|
| State         | Zustand (persist middleware)       |
| Data Fetching | React Query + Server Components    |
| Animation     | Framer Motion (minimal)            |
| Icons         | Lucide React                       |
| Package Mgr   | pnpm                              |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Scripts

| Script          | Description                          |
|----------------|--------------------------------------|
| `pnpm dev`     | Start dev server with Turbopack     |
| `pnpm build`   | Production build                    |
| `pnpm start`   | Start production server             |
| `pnpm lint`    | Run ESLint                          |
| `pnpm lint:fix`| Run ESLint with auto-fix            |
| `pnpm format`  | Format code with Prettier           |
| `pnpm format:check` | Check formatting              |
| `pnpm typecheck` | Run TypeScript type checking      |

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (shop)/                   # Shop route group (header + footer)
│   │   ├── home/                 # Home page
│   │   ├── products/[slug]/      # Product detail
│   │   ├── categories/[slug]/    # Category listing
│   │   ├── brands/[slug]/        # Brand listing
│   │   ├── search/               # Search results
│   │   ├── deals/                # Deals page
│   │   ├── compare/              # Product comparison
│   │   ├── pc-builder/           # PC Builder tool
│   │   ├── cart/                 # Shopping cart
│   │   ├── checkout/             # Checkout flow
│   │   ├── order-tracking/       # Order tracking
│   │   ├── layout.tsx            # Shop layout (header/footer)
│   │   └── loading.tsx           # Shop loading skeleton
│   ├── (auth)/                   # Auth route group (centered)
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (account)/                # Account route group (sidebar)
│   │   ├── profile/
│   │   ├── orders/
│   │   ├── wishlist/
│   │   └── addresses/
│   ├── api/health/               # Health check API
│   ├── layout.tsx                # Root layout (fonts, providers)
│   ├── globals.css               # Design tokens + global styles
│   ├── page.tsx                  # Root redirect
│   ├── not-found.tsx             # 404 page
│   └── error.tsx                 # Error boundary
├── components/
│   ├── ui/                       # Design system primitives
│   │   ├── button.tsx            # CVA button with variants
│   │   ├── badge.tsx             # Badge component
│   │   ├── input.tsx             # Input with error state
│   │   └── card.tsx              # Card compound component
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Site header
│   │   ├── footer.tsx            # Site footer
│   │   ├── container.tsx         # Responsive container
│   │   ├── section.tsx           # Section wrapper
│   │   └── grid.tsx              # Grid + SidebarLayout
│   ├── common/                   # Shared components
│   │   ├── breadcrumb.tsx
│   │   ├── empty-state.tsx
│   │   └── price-display.tsx
│   ├── skeletons/                # Loading skeletons
│   │   ├── product-card-skeleton.tsx
│   │   ├── product-grid-skeleton.tsx
│   │   ├── category-card-skeleton.tsx
│   │   ├── banner-skeleton.tsx
│   │   └── sidebar-filter-skeleton.tsx
│   ├── product/                  # Product domain (future)
│   ├── category/                 # Category domain (future)
│   ├── cart/                     # Cart domain (future)
│   └── search/                   # Search domain (future)
├── lib/
│   └── api/                      # API client layer
│       ├── client.ts             # Base fetch wrapper (ISR, tags)
│       ├── products.ts           # Product API functions
│       ├── categories.ts         # Category API functions
│       └── search.ts             # Search API functions
├── hooks/                        # Custom React hooks
│   ├── use-debounce.ts
│   ├── use-media-query.ts
│   ├── use-scroll-lock.ts
│   └── use-local-storage.ts
├── stores/                       # Zustand stores
│   ├── cart-store.ts             # Cart state (persisted)
│   ├── compare-store.ts          # Compare state (persisted)
│   └── ui-store.ts               # UI state (menu, search, modal)
├── providers/                    # React context providers
│   ├── query-provider.tsx        # React Query provider
│   └── index.tsx                 # Combined providers
├── types/                        # TypeScript type definitions
│   ├── product.ts
│   ├── category.ts
│   ├── cart.ts
│   ├── user.ts
│   └── index.ts
├── config/                       # App configuration
│   ├── site.ts                   # Site metadata
│   ├── navigation.ts             # Navigation structure
│   └── constants.ts              # App constants
├── utils/                        # Utility functions
│   ├── cn.ts                     # clsx + tailwind-merge
│   ├── format.ts                 # Price, string formatters
│   └── url.ts                    # URL builders
└── styles/                       # Additional styles (future)

docs/
├── ARCHITECTURE.md               # Full architecture documentation
└── DESIGN-SYSTEM.md              # Design system reference
```

## Design Theme

Premium dark theme with tech-green accent:

- **Backgrounds**: Near-black (`#0a0a0f`) → charcoal → deep slate
- **Accent**: Premium green (`#22c55e`) — muted, elegant, not neon
- **Typography**: Geist Sans/Mono with 10-step type scale
- **Spacing**: 4px base grid with consistent scale
- **Effects**: Subtle glassmorphism, glow shadows, shimmer loading

See [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for the full reference.

## Architecture Decisions

- **Route Groups**: `(shop)`, `(auth)`, `(account)` for layout isolation
- **Server-First**: Pages and layouts are Server Components by default
- **API Layer**: Centralized fetch wrapper with ISR caching + revalidation tags
- **State**: Zustand with persistence for cart/compare, ephemeral for UI
- **Styling**: Tailwind v4 `@theme inline` for design tokens as CSS custom properties
- **Components**: CVA for variant-driven design system components

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full breakdown.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable                      | Description            | Default                    |
|------------------------------|------------------------|----------------------------|
| `NEXT_PUBLIC_SITE_URL`       | Public site URL        | `http://localhost:3000`    |
| `NEXT_PUBLIC_API_URL`        | Backend API base URL   | `http://localhost:3001/api`|
| `NEXT_PUBLIC_ENABLE_ANALYTICS`| Enable analytics      | `false`                    |

## License

Private — All rights reserved.
