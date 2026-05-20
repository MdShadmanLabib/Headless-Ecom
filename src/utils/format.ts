import { siteConfig } from "@/config/site";

export function formatPrice(
  amount: number,
  options?: {
    currency?: string;
    locale?: string;
    showSymbol?: boolean;
  },
): string {
  const {
    currency = siteConfig.currency.code,
    locale = siteConfig.currency.locale,
    showSymbol = true,
  } = options ?? {};

  const formatted = new Intl.NumberFormat(locale, {
    style: showSymbol ? "currency" : "decimal",
    currency: showSymbol ? currency : undefined,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return formatted;
}

export function formatDiscount(price: number, originalPrice: number): string {
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );
  return `-${discount}%`;
}

export function formatSaveAmount(price: number, originalPrice: number): string {
  return formatPrice(originalPrice - price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

export function pluralize(
  count: number,
  singular: string,
  plural?: string,
): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}
