import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export function Section({
  children,
  className,
  title,
  subtitle,
  action,
}: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12 lg:py-16", className)}>
      {(title || action) && (
        <div className="mb-6 flex items-end justify-between md:mb-8">
          <div>
            {title && (
              <h2 className="text-h3 font-bold tracking-tight text-text-primary md:text-h2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-1 text-body-sm text-text-secondary md:text-body">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
