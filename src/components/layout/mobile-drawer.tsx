"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/stores/ui-store";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { mainNavigation, quickLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { CloseIcon, ChevronRightIcon, ChevronDownIcon } from "./icons";
import { cn } from "@/utils/cn";

export function MobileDrawer() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
  const pathname = usePathname();

  useScrollLock(isMobileMenuOpen);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[var(--z-overlay)] bg-overlay transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[var(--z-modal)] w-[min(320px,85vw)] transform overflow-y-auto bg-bg-secondary transition-transform duration-300 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal={isMobileMenuOpen}
      >
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border-primary px-4">
          <Link href="/" onClick={closeMobileMenu} className="shrink-0">
            <span className="text-h4 font-bold tracking-tight text-text-primary">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            aria-label="Close menu"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex gap-2 border-b border-border-primary p-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={cn(
                "flex-1 rounded-lg px-3 py-2 text-center text-caption font-medium transition-colors",
                link.featured
                  ? "bg-accent/10 text-accent hover:bg-accent/15"
                  : "bg-bg-tertiary text-text-secondary hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Category Navigation */}
        <nav className="p-2" aria-label="Categories">
          <ul className="space-y-0.5">
            {mainNavigation.map((item) => (
              <MobileNavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Footer links */}
        <div className="mt-auto border-t border-border-primary p-4">
          <div className="space-y-1.5">
            <Link
              href="/order-tracking"
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-2 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              Track Order
            </Link>
            <Link
              href="/help"
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-2 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              Help Center
            </Link>
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-body-sm font-medium text-text-inverse transition-colors hover:bg-accent-hover"
            >
              Sign In
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function MobileNavItem({
  item,
}: {
  item: (typeof mainNavigation)[number];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  const { closeMobileMenu } = useUIStore();

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={closeMobileMenu}
          className="flex items-center rounded-md px-3 py-2.5 text-body-sm font-medium text-text-primary transition-colors hover:bg-bg-tertiary"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-body-sm font-medium text-text-primary transition-colors hover:bg-bg-tertiary"
        aria-expanded={isExpanded}
      >
        {item.label}
        <ChevronDownIcon
          size={14}
          className={cn(
            "text-text-tertiary transition-transform duration-200",
            isExpanded && "rotate-180",
          )}
        />
      </button>
      <ul
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <li>
          <Link
            href={item.href}
            onClick={closeMobileMenu}
            className="flex items-center gap-1.5 px-6 py-2 text-caption font-semibold text-accent transition-colors hover:bg-bg-tertiary"
          >
            All {item.label}
            <ChevronRightIcon size={12} />
          </Link>
        </li>
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={closeMobileMenu}
              className="block px-6 py-2 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
