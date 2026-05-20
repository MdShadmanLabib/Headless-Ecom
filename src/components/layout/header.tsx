import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-border-primary bg-bg-primary/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="border-b border-border-primary bg-bg-secondary">
        <Container>
          <div className="flex h-8 items-center justify-between text-caption text-text-tertiary">
            <p>Free shipping on orders over ৳5,000</p>
            <div className="hidden items-center gap-4 sm:flex">
              <Link href="/order-tracking" className="transition-colors hover:text-text-secondary">
                Order Tracking
              </Link>
              <Link href="/help" className="transition-colors hover:text-text-secondary">
                Help
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-h4 font-bold tracking-tight text-text-primary">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </span>
          </Link>

          {/* Search Bar Placeholder */}
          <div className="hidden max-w-xl flex-1 px-8 md:block">
            <div className="flex h-10 items-center rounded-lg border border-border-primary bg-bg-secondary px-4 text-body-sm text-text-tertiary transition-colors focus-within:border-accent">
              <span>Search products, categories, brands...</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary md:hidden"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <Link
              href="/compare"
              className="hidden h-10 items-center gap-2 rounded-lg px-3 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary sm:flex"
            >
              <CompareIcon />
              <span className="hidden lg:inline">Compare</span>
            </Link>
            <Link
              href="/cart"
              className="relative flex h-10 items-center gap-2 rounded-lg px-3 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              <CartIcon />
              <span className="hidden lg:inline">Cart</span>
            </Link>
            <Link
              href="/login"
              className="flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-body-sm font-medium text-text-inverse transition-colors hover:bg-accent-hover"
            >
              <UserIcon />
              <span className="hidden sm:inline">Account</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Navigation Bar Placeholder */}
      <div className="hidden border-t border-border-primary lg:block">
        <Container>
          <nav className="flex h-11 items-center gap-1 overflow-x-auto">
            <span className="px-3 py-1.5 text-body-sm text-text-secondary">
              Navigation will be rendered here
            </span>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
