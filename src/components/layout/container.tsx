import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  size = "2xl",
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeMap[size], className)}
    >
      {children}
    </Component>
  );
}
