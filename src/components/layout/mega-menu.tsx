"use client";

import { useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useUIStore } from "@/stores/ui-store";
import type { MegaMenuItem } from "@/config/navigation";
import { ChevronRightIcon, ArrowRightIcon } from "./icons";
import { cn } from "@/utils/cn";

interface MegaMenuProps {
  items: MegaMenuItem[];
}

export function MegaMenu({ items }: MegaMenuProps) {
  const { activeMegaMenu, setActiveMegaMenu } = useUIStore();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleMouseEnter = useCallback(
    (label: string) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveMegaMenu(label);
    },
    [setActiveMegaMenu],
  );

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  }, [setActiveMegaMenu]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveMegaMenu(activeMegaMenu === label ? null : label);
      }
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
      }
    },
    [activeMegaMenu, setActiveMegaMenu],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden border-t border-border-primary lg:block"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
        <ul className="flex h-11 items-center gap-0.5" role="menubar">
          {items.map((item) => {
            const isActive = activeMegaMenu === item.label;
            const hasDropdown = Boolean(item.children?.length || item.columns?.length);

            return (
              <li
                key={item.label}
                className="relative"
                role="none"
                onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  role="menuitem"
                  aria-haspopup={hasDropdown}
                  aria-expanded={isActive}
                  onKeyDown={(e) => hasDropdown && handleKeyDown(e, item.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-1.5 text-body-sm font-medium transition-colors",
                    isActive
                      ? "bg-bg-tertiary text-accent"
                      : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary",
                  )}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronRightIcon
                      size={12}
                      className={cn(
                        "transition-transform duration-150",
                        isActive ? "rotate-90" : "rotate-0",
                      )}
                    />
                  )}
                </Link>

                {hasDropdown && isActive && (
                  <MegaMenuDropdown item={item} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function MegaMenuDropdown({ item }: { item: MegaMenuItem }) {
  const columns = item.columns ?? (item.children ? [item.children] : []);

  return (
    <div
      className="absolute left-0 top-full z-[var(--z-dropdown)] w-max min-w-[280px] pt-1"
      role="menu"
      aria-label={`${item.label} submenu`}
    >
      <div className="rounded-xl border border-border-primary bg-bg-secondary shadow-xl">
        <div className="flex">
          {/* Category columns */}
          <div className={cn("flex gap-0 p-4", columns.length > 1 && "divide-x divide-border-primary")}>
            {columns.map((column, colIdx) => (
              <div key={colIdx} className={cn("min-w-[180px]", colIdx > 0 && "pl-4")}>
                {colIdx === 0 && (
                  <Link
                    href={item.href}
                    className="mb-2 flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-hover"
                    role="menuitem"
                  >
                    All {item.label}
                    <ArrowRightIcon size={12} />
                  </Link>
                )}
                <ul className="space-y-0.5">
                  {column.map((child) => (
                    <li key={child.href} role="none">
                      <Link
                        href={child.href}
                        role="menuitem"
                        className="block rounded-md px-2 py-1.5 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promo card */}
          {item.promo && (
            <div className="border-l border-border-primary p-4">
              <Link
                href={item.promo.href}
                className="group block w-[200px] rounded-lg border border-border-primary bg-bg-tertiary p-4 transition-all hover:border-border-accent hover:shadow-glow"
              >
                {item.promo.badge && (
                  <span className="mb-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-caption font-semibold text-accent">
                    {item.promo.badge}
                  </span>
                )}
                <div className="mb-2 aspect-[4/3] rounded-md bg-bg-elevated" />
                <p className="text-body-sm font-semibold text-text-primary group-hover:text-accent">
                  {item.promo.title}
                </p>
                <p className="mt-0.5 text-caption text-text-tertiary">
                  {item.promo.description}
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
