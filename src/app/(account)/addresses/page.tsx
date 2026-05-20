import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addresses",
};

export default function AddressesPage() {
  return (
    <div>
      <h1 className="text-h3 font-bold text-text-primary">My Addresses</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Manage your delivery addresses
      </p>
    </div>
  );
}
