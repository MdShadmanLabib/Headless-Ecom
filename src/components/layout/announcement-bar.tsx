"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { announcementMessages } from "@/config/navigation";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % announcementMessages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative overflow-hidden border-b border-border-primary bg-accent/5">
      <div className="mx-auto flex h-9 max-w-[var(--container-2xl)] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-4 text-caption text-text-tertiary sm:flex">
          <Link
            href="/order-tracking"
            className="transition-colors hover:text-text-secondary"
          >
            Track Order
          </Link>
          <span className="h-3 w-px bg-border-primary" />
          <Link
            href="/help"
            className="transition-colors hover:text-text-secondary"
          >
            Help
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center sm:justify-end">
          <p className="text-caption font-medium text-accent">
            {announcementMessages[index]}
          </p>
        </div>
      </div>
    </div>
  );
}
