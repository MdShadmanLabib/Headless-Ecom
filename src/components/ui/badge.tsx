import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-caption font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bg-surface text-text-secondary",
        accent: "bg-accent-subtle text-accent",
        sale: "bg-error/10 text-error",
        new: "bg-info/10 text-info",
        hot: "bg-warning/10 text-warning",
        success: "bg-success/10 text-success",
        outline: "border border-border-secondary text-text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
