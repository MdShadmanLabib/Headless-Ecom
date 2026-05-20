"use client";

import dynamic from "next/dynamic";

const MobileDrawer = dynamic(
  () =>
    import("@/components/layout/mobile-drawer").then((mod) => mod.MobileDrawer),
  { ssr: false },
);

const MobileBottomNav = dynamic(
  () =>
    import("@/components/layout/mobile-bottom-nav").then(
      (mod) => mod.MobileBottomNav,
    ),
  { ssr: false },
);

const CartDrawer = dynamic(
  () =>
    import("@/components/layout/cart-drawer").then((mod) => mod.CartDrawer),
  { ssr: false },
);

export function ClientOverlays() {
  return (
    <>
      <MobileDrawer />
      <MobileBottomNav />
      <CartDrawer />
    </>
  );
}
