import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-h3 font-bold text-text-primary">My Wishlist</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Products you have saved
      </p>
    </div>
  );
}
