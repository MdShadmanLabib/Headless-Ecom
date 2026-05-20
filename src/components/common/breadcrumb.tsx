import Link from "next/link";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/utils/cn";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-3", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-caption text-text-tertiary">
        <li>
          <Link href="/" className="transition-colors hover:text-text-secondary">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-text-secondary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
