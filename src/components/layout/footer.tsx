import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-h4 font-bold tracking-tight text-text-primary">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-3 text-body-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex gap-3">
              {Object.entries(siteConfig.links).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-tertiary text-text-secondary transition-colors hover:bg-accent hover:text-text-inverse"
                  aria-label={platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-caption capitalize">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-text-primary">
              About
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-text-primary">
              Policies
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.policies.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-text-primary">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-primary py-6 text-caption text-text-tertiary sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>bKash</span>
            <span>Nagad</span>
            <span>COD</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
