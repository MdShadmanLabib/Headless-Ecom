"use client";

import { useState, useCallback } from "react";
import { MailIcon } from "./icons";
import { cn } from "@/utils/cn";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) return;
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1000);
    },
    [email],
  );

  return (
    <section className="border-t border-border-primary bg-bg-secondary">
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <MailIcon size={24} />
          </div>
          <h3 className="text-h3 font-bold text-text-primary">
            Stay in the Loop
          </h3>
          <p className="mt-2 text-body-sm text-text-secondary">
            Get the latest deals, new arrivals, and exclusive offers delivered to
            your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className={cn(
                "h-11 flex-1 rounded-lg border bg-bg-primary px-4 text-body-sm text-text-primary placeholder:text-text-tertiary transition-all focus:outline-none",
                status === "error"
                  ? "border-error"
                  : "border-border-primary focus:border-accent focus:shadow-[0_0_0_1px_var(--color-accent)]",
              )}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 shrink-0 rounded-lg bg-accent px-6 text-body-sm font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 text-body-sm font-medium text-success">
              Thanks for subscribing! Check your inbox for confirmation.
            </p>
          )}

          <p className="mt-4 text-caption text-text-tertiary">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
