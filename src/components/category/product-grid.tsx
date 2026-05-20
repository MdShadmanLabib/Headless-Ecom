"use client";

import type { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { ProductListCard } from "./product-list-card";
import { cn } from "@/utils/cn";

interface ProductGridProps {
  products: Product[];
  view: "grid" | "list";
  className?: string;
}

export function ProductGrid({ products, view, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border-primary bg-bg-secondary px-6 py-16 text-center">
        <div className="mb-4 text-5xl">🔍</div>
        <h3 className="text-body font-semibold text-text-primary">
          No products found
        </h3>
        <p className="mt-2 max-w-md text-body-sm text-text-secondary">
          Try adjusting your filters or search criteria to find what you&apos;re
          looking for.
        </p>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className={cn("space-y-3", className)}>
        {products.map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 4} />
      ))}
    </div>
  );
}
