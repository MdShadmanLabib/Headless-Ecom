"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { flashDealProducts } from "@/data/mock-products";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownTimer() {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 23, 59, 59);
  const { hours, minutes, seconds } = useCountdown(endDate);

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-caption font-medium text-text-secondary">Ends in</span>
      <TimeUnit value={hours} />
      <span className="text-body-sm font-bold text-text-tertiary">:</span>
      <TimeUnit value={minutes} />
      <span className="text-body-sm font-bold text-text-tertiary">:</span>
      <TimeUnit value={seconds} />
    </div>
  );
}

function TimeUnit({ value }: { value: number }) {
  return (
    <span className="flex h-7 min-w-7 items-center justify-center rounded-md bg-accent/10 px-1.5 text-caption font-bold tabular-nums text-accent">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export function FlashDeals() {
  return (
    <Section
      title="Flash Deals"
      subtitle="Limited time offers — grab them before they're gone"
      action={
        <div className="flex items-center gap-4">
          <CountdownTimer />
          <Link
            href="/deals"
            className="hidden text-body-sm font-medium text-accent transition-colors hover:text-accent-hover sm:inline"
          >
            View All →
          </Link>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {flashDealProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
