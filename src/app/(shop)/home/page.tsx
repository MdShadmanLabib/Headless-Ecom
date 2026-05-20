import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-bg-secondary py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-glow),transparent_50%)]" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-overline font-semibold uppercase tracking-widest text-accent">
              Premium Tech Store
            </p>
            <h1 className="text-h1 font-bold tracking-tight text-text-primary md:text-display">
              Build Your Ultimate
              <span className="text-gradient"> Setup</span>
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              Discover the latest in computing, gaming, and tech accessories.
              Enterprise-grade performance at your fingertips.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="secondary" size="lg">
                PC Builder
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Featured Categories */}
        <Section
          title="Featured Categories"
          subtitle="Get Your Desired Product from Featured Category"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {placeholderCategories.map((cat) => (
              <div
                key={cat}
                className="flex flex-col items-center gap-3 rounded-xl border border-border-primary bg-bg-secondary p-6 transition-all hover:border-border-accent hover:shadow-glow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-bg-tertiary text-text-tertiary">
                  <span className="text-h4">💻</span>
                </div>
                <span className="text-body-sm font-medium text-text-primary">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Products */}
        <Section
          title="Featured Products"
          subtitle="Check & Get Your Desired Product"
          action={
            <Button variant="ghost" size="sm">
              View All →
            </Button>
          }
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl border border-border-primary bg-bg-secondary transition-all hover:border-border-accent hover:shadow-glow"
              >
                <div className="aspect-square bg-bg-tertiary" />
                <div className="space-y-2 p-4">
                  <p className="text-caption text-text-tertiary">Category</p>
                  <p className="text-body-sm font-medium text-text-primary line-clamp-2">
                    Product Name Placeholder #{i + 1}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-body font-bold text-accent">
                      ৳XX,XXX
                    </span>
                    <Button size="sm" variant="secondary">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}

const placeholderCategories = [
  "Laptop",
  "Desktop",
  "Components",
  "Monitor",
  "Gaming",
  "Accessories",
];
