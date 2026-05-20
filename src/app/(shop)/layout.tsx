import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsletterSection } from "@/components/layout/newsletter-section";
import { ClientOverlays } from "@/components/layout/client-overlays";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <NewsletterSection />
      <Footer />

      {/* Client-only overlays (dynamically imported, no SSR) */}
      <ClientOverlays />

      {/* Bottom nav spacer on mobile */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
