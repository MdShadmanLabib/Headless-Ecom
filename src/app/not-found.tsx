import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-display font-bold text-text-primary">404</h1>
      <p className="mt-2 text-body-lg text-text-secondary">
        Page not found
      </p>
      <p className="mt-1 text-body-sm text-text-tertiary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="mt-6">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
