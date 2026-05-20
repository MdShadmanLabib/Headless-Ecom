import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";

const paymentMethods = [
  { name: "Visa", abbr: "V" },
  { name: "Mastercard", abbr: "MC" },
  { name: "bKash", abbr: "bK" },
  { name: "Nagad", abbr: "N" },
  { name: "COD", abbr: "₸" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary">
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column — spans 2 */}
          <div className="lg:col-span-2">
            <Link href="/home" className="inline-block">
              <span className="text-h3 font-bold tracking-tight text-text-primary">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-body-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="mt-5 space-y-2 text-body-sm text-text-secondary">
              <p className="flex items-center gap-2">
                <span className="text-text-tertiary">Email:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-text-tertiary">Phone:</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-text-tertiary">Location:</span>
                <span>{siteConfig.contact.address}</span>
              </p>
            </div>

            {/* Social links */}
            <div className="mt-5 flex gap-2">
              {Object.entries(siteConfig.links).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary bg-bg-tertiary text-text-secondary transition-all hover:border-accent hover:bg-accent hover:text-text-inverse"
                  aria-label={platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-caption font-semibold uppercase">
                    {platform[0]}
                  </span>
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
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-primary py-6 sm:flex-row">
          <p className="text-caption text-text-tertiary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className="flex h-7 items-center rounded border border-border-primary bg-bg-tertiary px-2 text-caption font-medium text-text-tertiary"
                title={method.name}
              >
                {method.abbr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
