import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-h3 font-bold text-text-primary">My Orders</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Track and manage your orders
      </p>
    </div>
  );
}
