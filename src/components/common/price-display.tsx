import { cn } from "@/utils/cn";
import { formatPrice, formatDiscount, formatSaveAmount } from "@/utils/format";

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  size?: "sm" | "md" | "lg";
  showSave?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { price: "text-body-sm", original: "text-caption" },
  md: { price: "text-body font-bold", original: "text-body-sm" },
  lg: { price: "text-h3 font-bold", original: "text-body" },
};

export function PriceDisplay({
  price,
  originalPrice,
  size = "md",
  showSave = false,
  className,
}: PriceDisplayProps) {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("text-accent", sizeMap[size].price)}>
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <>
          <span
            className={cn(
              "text-text-tertiary line-through",
              sizeMap[size].original,
            )}
          >
            {formatPrice(originalPrice)}
          </span>
          <span className="rounded bg-error/10 px-1.5 py-0.5 text-caption font-medium text-error">
            {formatDiscount(price, originalPrice)}
          </span>
        </>
      )}
      {hasDiscount && showSave && (
        <span className="w-full text-caption text-success">
          Save {formatSaveAmount(price, originalPrice)}
        </span>
      )}
    </div>
  );
}
