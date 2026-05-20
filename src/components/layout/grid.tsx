import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "sm" | "md" | "lg";
}

const gapMap = {
  sm: "gap-3",
  md: "gap-4 md:gap-6",
  lg: "gap-6 md:gap-8",
};

export function Grid({
  children,
  className,
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = "md",
}: GridProps) {
  const colClasses = [
    cols.default && `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn("grid", colClasses, gapMap[gap], className)}>
      {children}
    </div>
  );
}

interface SidebarLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  className?: string;
  sidebarPosition?: "left" | "right";
}

export function SidebarLayout({
  children,
  sidebar,
  className,
  sidebarPosition = "left",
}: SidebarLayoutProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:gap-8",
        sidebarPosition === "right" && "lg:flex-row-reverse",
        className,
      )}
    >
      <aside className="w-full shrink-0 lg:w-[280px]">{sidebar}</aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
