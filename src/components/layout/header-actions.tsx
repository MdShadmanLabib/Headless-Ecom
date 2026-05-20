"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";
import { useCompareStore } from "@/stores/compare-store";
import { useUIStore } from "@/stores/ui-store";
import {
  SearchIcon,
  CartIcon,
  CompareIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
} from "./icons";
import { cn } from "@/utils/cn";

export function HeaderActions() {
  const cartItemCount = useCartStore((s) => s.getItemCount());
  const compareCount = useCompareStore((s) => s.items.length);
  const { openSearch, openCartDrawer, openMobileMenu } = useUIStore();

  return (
    <div className="flex items-center gap-1">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={openMobileMenu}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Mobile search */}
      <button
        type="button"
        onClick={openSearch}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary md:hidden"
        aria-label="Search"
      >
        <SearchIcon />
      </button>

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className="hidden h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary sm:flex"
        aria-label="Wishlist"
      >
        <HeartIcon />
      </Link>

      {/* Compare */}
      <CompareIndicator count={compareCount} />

      {/* Cart */}
      <button
        type="button"
        onClick={openCartDrawer}
        className="relative flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
        aria-label={`Cart with ${cartItemCount} items`}
      >
        <CartIcon />
        {cartItemCount > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-text-inverse">
            {cartItemCount > 99 ? "99+" : cartItemCount}
          </span>
        )}
        <span className="hidden text-body-sm lg:inline">Cart</span>
      </button>

      {/* Account */}
      <Link
        href="/login"
        className="flex h-10 items-center gap-2 rounded-lg bg-accent px-3 text-body-sm font-medium text-text-inverse transition-colors hover:bg-accent-hover lg:px-4"
      >
        <UserIcon />
        <span className="hidden sm:inline">Account</span>
      </Link>
    </div>
  );
}

function CompareIndicator({ count }: { count: number }) {
  return (
    <Link
      href="/compare"
      className={cn(
        "relative hidden h-10 items-center gap-1.5 rounded-lg px-2.5 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary sm:flex",
      )}
      aria-label={`Compare ${count} items`}
    >
      <CompareIcon />
      {count > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-info px-1 text-[11px] font-bold text-white">
          {count}
        </span>
      )}
      <span className="hidden text-body-sm lg:inline">Compare</span>
    </Link>
  );
}
