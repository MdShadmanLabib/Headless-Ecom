import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary p-4">
      <Link href="/" className="mb-8">
        <span className="text-h3 font-bold tracking-tight text-text-primary">
          {siteConfig.name}
          <span className="text-accent">.</span>
        </span>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
