"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/stores/cart-store";
import { useUIStore } from "@/stores/ui-store";
import { HomeIcon, GridIcon, CartIcon, HeartIcon, UserIcon } from "./icons";
import { cn } from "@/utils/cn";

const navItems = [
  { label: "Home", href: "/home", icon: HomeIcon },
  { label: "Categories", href: "#categories", icon: GridIcon, action: "menu" as const },
  { label: "Cart", href: "/cart", icon: CartIcon, showBadge: true },
  { label: "Wishlist", href: "/wishlist", icon: HeartIcon },
  { label: "Account", href: "/profile", icon: UserIcon },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.getItemCount());
  const { openMobileMenu } = useUIStore();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[var(--z-sticky)] border-t border-border-primary bg-bg-secondary/95 backdrop-blur-sm lg:hidden"
      aria-label="Mobile bottom navigation"
    >
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive =
            item.action !== "menu" &&
            (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
          const Icon = item.icon;

          if (item.action === "menu") {
            return (
              <button
                key={item.label}
                type="button"
                onClick={openMobileMenu}
                className="flex flex-1 flex-col items-center gap-0.5 py-1 text-text-tertiary transition-colors active:text-accent"
                aria-label="Open categories menu"
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 py-1 transition-colors active:text-accent",
                isActive ? "text-accent" : "text-text-tertiary",
              )}
              aria-label={item.label}
            >
              <span className="relative">
                <Icon size={20} />
                {item.showBadge && itemCount > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-text-inverse">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
