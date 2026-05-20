import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-tertiary text-text-tertiary">
          {icon}
        </div>
      )}
      <h3 className="text-h4 font-semibold text-text-primary">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-body-sm text-text-secondary">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
