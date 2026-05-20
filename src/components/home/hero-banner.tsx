"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface Slide {
  title: string;
  highlight: string;
  subtitle: string;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

const slides: Slide[] = [
  {
    badge: "New Arrival",
    title: "Next-Gen Graphics",
    highlight: "RTX 50 Series",
    subtitle: "Experience unmatched performance with NVIDIA's latest GPUs. Available now with up to 32GB GDDR7.",
    cta: { label: "Shop GPUs", href: "/categories/components/graphics-card" },
    secondaryCta: { label: "PC Builder", href: "/pc-builder" },
  },
  {
    badge: "Limited Time",
    title: "Gaming Laptops",
    highlight: "Up to 30% Off",
    subtitle: "Premium gaming laptops from ASUS, MSI, and Lenovo. 4K displays, latest processors, studio-grade performance.",
    cta: { label: "View Deals", href: "/categories/laptop/gaming" },
  },
  {
    badge: "Build Your Dream",
    title: "Custom PC",
    highlight: "Builder Tool",
    subtitle: "Select compatible components, compare prices, and build your perfect workstation or gaming rig.",
    cta: { label: "Start Building", href: "/pc-builder" },
    secondaryCta: { label: "Pre-Built PCs", href: "/categories/desktop" },
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-bg-secondary">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-glow),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-accent-subtle),transparent_50%)]" />

      <div className="relative mx-auto flex max-w-[var(--container-2xl)] flex-col items-center px-4 py-12 sm:px-6 md:py-20 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {slide.badge && (
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-caption font-semibold text-accent">
              {slide.badge}
            </span>
          )}
          <h1 className="text-h1 font-bold tracking-tight text-text-primary md:text-display">
            {slide.title}{" "}
            <span className="text-gradient">{slide.highlight}</span>
          </h1>
          <p className="mt-4 max-w-lg text-body text-text-secondary lg:text-body-lg">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href={slide.cta.href}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-body font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-[0.98]"
            >
              {slide.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            {slide.secondaryCta && (
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex h-12 items-center rounded-lg border border-border-secondary bg-bg-tertiary px-6 text-body font-medium text-text-primary transition-all hover:border-border-accent hover:bg-bg-elevated"
              >
                {slide.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-2xl border border-border-primary bg-bg-tertiary lg:max-w-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-display text-text-tertiary/30">📦</span>
                <p className="mt-2 text-caption text-text-tertiary">Banner Image</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent" />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              idx === current ? "w-6 bg-accent" : "w-1.5 bg-text-tertiary/40 hover:bg-text-tertiary",
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
