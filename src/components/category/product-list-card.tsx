"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useCallback } from "react";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { PriceDisplay } from "@/components/common/price-display";
import { useCartStore } from "@/stores/cart-store";
import { cn } from "@/utils/cn";

interface ProductListCardProps {
  product: Product;
  className?: string;
}

export const ProductListCard = memo(function ProductListCard({
  product,
  className,
}: ProductListCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const primaryImage =
    product.images.find((img) => img.isPrimary) ?? product.images[0];
  const isLowStock =
    product.inStock && product.stockCount !== undefined && product.stockCount <= 5;

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

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex gap-4 overflow-hidden rounded-xl border border-border-primary bg-bg-secondary p-3 transition-all duration-200 hover:border-border-accent hover:shadow-glow sm:gap-5 sm:p-4",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-lg bg-bg-tertiary sm:w-40">
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-text-tertiary">
            <span className="text-h3">📦</span>
          </div>
        )}

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute left-1.5 top-1.5 flex flex-col gap-1">
            {product.badges.map((badge, idx) => (
              <Badge
                key={idx}
                variant={
                  badge.type === "sale"
                    ? "sale"
                    : badge.type === "new"
                      ? "new"
                      : badge.type === "hot"
                        ? "hot"
                        : "accent"
                }
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-lg bg-bg-secondary px-2 py-1 text-caption font-semibold text-error">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <p className="text-caption text-text-tertiary">{product.category.name}</p>

        <h3 className="mt-1 line-clamp-2 text-body-sm font-medium text-text-primary transition-colors group-hover:text-accent sm:text-body">
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
                  fill={
                    i < Math.floor(product.rating ?? 0)
                      ? "currentColor"
                      : "none"
                  }
                  stroke="currentColor"
                  strokeWidth="2"
                  className={
                    i < Math.floor(product.rating ?? 0)
                      ? "text-warning"
                      : "text-text-tertiary"
                  }
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

        {isLowStock && (
          <p className="mt-1 text-caption font-medium text-warning">
            Only {product.stockCount} left
          </p>
        )}

        {product.brand && (
          <p className="mt-1 text-caption text-text-tertiary">
            Brand: <span className="text-text-secondary">{product.brand.name}</span>
          </p>
        )}

        {/* Price + Add to cart */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            size="md"
          />
          {product.inStock && (
            <button
              type="button"
              onClick={handleAddToCart}
              className="shrink-0 rounded-lg bg-accent px-4 py-2 text-body-sm font-semibold text-text-inverse transition-colors hover:bg-accent-hover"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
});
