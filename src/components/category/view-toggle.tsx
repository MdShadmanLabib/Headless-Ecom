"use client";

import { cn } from "@/utils/cn";

interface ViewToggleProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
  className?: string;
}

export function ViewToggle({ view, onViewChange, className }: ViewToggleProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border-primary",
        className,
      )}
      role="radiogroup"
      aria-label="View mode"
    >
      <button
        type="button"
        onClick={() => onViewChange("grid")}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-l-lg transition-colors",
          view === "grid"
            ? "bg-accent text-text-inverse"
            : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary",
        )}
        role="radio"
        aria-checked={view === "grid"}
        aria-label="Grid view"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onViewChange("list")}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-r-lg border-l border-border-primary transition-colors",
          view === "list"
            ? "bg-accent text-text-inverse"
            : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary",
        )}
        role="radio"
        aria-checked={view === "list"}
        aria-label="List view"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  );
}
