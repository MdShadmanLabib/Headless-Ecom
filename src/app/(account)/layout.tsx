import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container className="flex-1 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <aside className="w-full shrink-0 lg:w-[240px]">
            <nav className="space-y-1 rounded-xl border border-border-primary bg-bg-secondary p-4">
              <p className="mb-3 text-body-sm font-semibold text-text-primary">
                My Account
              </p>
              <span className="block rounded-lg px-3 py-2 text-body-sm text-text-secondary">
                Profile
              </span>
              <span className="block rounded-lg px-3 py-2 text-body-sm text-text-secondary">
                Orders
              </span>
              <span className="block rounded-lg px-3 py-2 text-body-sm text-text-secondary">
                Wishlist
              </span>
              <span className="block rounded-lg px-3 py-2 text-body-sm text-text-secondary">
                Addresses
              </span>
            </nav>
          </aside>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </Container>
      <Footer />
    </>
  );
}
