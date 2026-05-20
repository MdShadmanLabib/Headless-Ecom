"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useCallback } from "react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/common/price-display";
import { useCartStore } from "@/stores/cart-store";
import { useCompareStore } from "@/stores/compare-store";
import { cn } from "@/utils/cn";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

const badgeVariantMap: Record<string, "sale" | "new" | "hot" | "accent"> = {
  sale: "sale",
  new: "new",
  hot: "hot",
  limited: "accent",
  emi: "accent",
};

export const ProductCard = memo(function ProductCard({
  product,
  priority = false,
  className,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const addCompare = useCompareStore((s) => s.addItem);

  const primaryImage = product.images.find((img) => img.isPrimary) ?? product.images[0];
  const isLowStock = product.inStock && product.stockCount !== undefined && product.stockCount <= 5;

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addItem({
        id: product.id,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        originalPrice: product.originalPrice,
        image: primaryImage?.url ?? "",
        maxQuantity: product.stockCount ?? 10,
      });
    },
    [addItem, product, primaryImage],
  );

  const handleAddCompare = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addCompare({
        productId: product.id,
        name: product.name,
        slug: product.slug,
        image: primaryImage?.url ?? "",
        categorySlug: product.category.slug,
      });
    },
    [addCompare, product, primaryImage],
  );

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border-primary bg-bg-secondary transition-all duration-200 hover:border-border-accent hover:shadow-glow",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-bg-tertiary">
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-text-tertiary">
            <span className="text-h2">📦</span>
          </div>
        )}

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.badges.map((badge, idx) => (
              <Badge key={idx} variant={badgeVariantMap[badge.type] ?? "default"}>
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        {/* Quick actions overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-3 transition-transform duration-200 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAddCompare}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-secondary/90 text-text-secondary backdrop-blur-sm transition-colors hover:bg-accent hover:text-text-inverse"
            aria-label="Add to compare"
            title="Compare"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3h5v5" />
              <path d="M8 3H3v5" />
              <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
              <path d="m15 9 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-secondary/90 text-text-secondary backdrop-blur-sm transition-colors hover:bg-accent hover:text-text-inverse"
            aria-label="Add to wishlist"
            title="Wishlist"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-lg bg-bg-secondary px-3 py-1.5 text-body-sm font-semibold text-error">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {/* Category */}
        <p className="mb-1 text-caption text-text-tertiary">
          {product.category.name}
        </p>

        {/* Name */}
        <h3 className="line-clamp-2 text-body-sm font-medium text-text-primary transition-colors group-hover:text-accent">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="mt-1.5 flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating ?? 0) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  className={i < Math.floor(product.rating ?? 0) ? "text-warning" : "text-text-tertiary"}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-caption text-text-tertiary">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Stock warning */}
        {isLowStock && (
          <p className="mt-1.5 text-caption font-medium text-warning">
            Only {product.stockCount} left
          </p>
        )}

        {/* Price + Add to cart */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            size="sm"
          />
          {product.inStock && (
            <button
              type="button"
              onClick={handleAddToCart}
              className="shrink-0 rounded-lg bg-accent/10 px-2.5 py-1.5 text-caption font-semibold text-accent transition-colors hover:bg-accent hover:text-text-inverse"
              aria-label={`Add ${product.name} to cart`}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </Link>
  );
});
