import Link from "next/link";

const banners = [
  {
    title: "Build Your Perfect PC",
    subtitle: "Use our PC Builder to pick compatible components and get the best price.",
    cta: "Launch Builder",
    href: "/pc-builder",
    accent: true,
  },
  {
    title: "Student Discounts",
    subtitle: "Exclusive pricing on laptops, monitors, and accessories for students.",
    cta: "Learn More",
    href: "/deals",
    accent: false,
  },
];

export function PromotionalBanners() {
  return (
    <div className="grid gap-4 py-8 md:grid-cols-2 md:py-12">
      {banners.map((banner) => (
        <Link
          key={banner.href + banner.title}
          href={banner.href}
          className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary p-6 transition-all hover:border-border-accent hover:shadow-glow md:p-8"
        >
          {banner.accent && (
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-[60px]" />
          )}
          <div className="relative">
            <h3 className="text-h4 font-bold text-text-primary md:text-h3">
              {banner.title}
            </h3>
            <p className="mt-2 max-w-sm text-body-sm text-text-secondary">
              {banner.subtitle}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent transition-colors group-hover:text-accent-hover">
              {banner.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
