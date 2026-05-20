"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cart-store";
import { useUIStore } from "@/stores/ui-store";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { formatPrice } from "@/utils/format";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "./icons";
import { cn } from "@/utils/cn";

export function CartDrawer() {
  const { isCartDrawerOpen, closeCartDrawer } = useUIStore();
  const items = useCartStore((s) => s.items);
  const getItemCount = useCartStore((s) => s.getItemCount);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);

  useScrollLock(isCartDrawerOpen);

  const itemCount = getItemCount();
  const subtotal = getSubtotal();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[var(--z-overlay)] bg-overlay transition-opacity duration-300",
          isCartDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeCartDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[var(--z-modal)] flex w-[min(400px,90vw)] transform flex-col bg-bg-secondary transition-transform duration-300 ease-out",
          isCartDrawerOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal={isCartDrawerOpen}
      >
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border-primary px-4">
          <div className="flex items-center gap-2">
            <h2 className="text-body font-semibold text-text-primary">Cart</h2>
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-caption font-bold text-text-inverse">
                {itemCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="rounded-md px-2 py-1 text-caption text-text-tertiary transition-colors hover:text-error"
              >
                Clear All
              </button>
            )}
            <button
              type="button"
              onClick={closeCartDrawer}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
              aria-label="Close cart"
            >
              <CloseIcon size={18} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-tertiary">
                <span className="text-h3 text-text-tertiary">🛒</span>
              </div>
              <p className="text-body font-medium text-text-primary">
                Your cart is empty
              </p>
              <p className="mt-1 text-body-sm text-text-secondary">
                Add items to get started
              </p>
              <Link
                href="/home"
                onClick={closeCartDrawer}
                className="mt-6 rounded-lg bg-accent px-6 py-2.5 text-body-sm font-medium text-text-inverse transition-colors hover:bg-accent-hover"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border-primary">
              {items.map((item) => (
                <li key={item.productId} className="flex gap-3 p-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-bg-tertiary">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-text-tertiary">
                        <span className="text-h4">📦</span>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={closeCartDrawer}
                      className="line-clamp-2 text-body-sm font-medium text-text-primary transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-body-sm font-bold text-accent">
                      {formatPrice(item.price)}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-border-primary">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon />
                        </button>
                        <span className="min-w-[28px] text-center text-caption font-medium text-text-primary">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.maxQuantity}
                          className="flex h-7 w-7 items-center justify-center text-text-secondary transition-colors hover:text-text-primary disabled:opacity-50"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-text-tertiary transition-colors hover:bg-error/10 hover:text-error"
                        aria-label={`Remove ${item.name}`}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-primary p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-body-sm text-text-secondary">Subtotal</span>
              <span className="text-body font-bold text-text-primary">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-caption text-text-tertiary">
              Shipping & taxes calculated at checkout
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/checkout"
                onClick={closeCartDrawer}
                className="flex h-11 items-center justify-center rounded-lg bg-accent text-body-sm font-semibold text-text-inverse transition-colors hover:bg-accent-hover active:scale-[0.98]"
              >
                Checkout — {formatPrice(subtotal)}
              </Link>
              <Link
                href="/cart"
                onClick={closeCartDrawer}
                className="flex h-10 items-center justify-center rounded-lg border border-border-secondary bg-bg-tertiary text-body-sm font-medium text-text-primary transition-colors hover:bg-bg-elevated"
              >
                View Cart
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
