import Link from "next/link";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { AnnouncementBar } from "./announcement-bar";
import { DesktopSearchBar, MobileSearchOverlay } from "./search-bar";
import { HeaderActions } from "./header-actions";
import { MegaMenu } from "./mega-menu";

export function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-[var(--z-sticky)] border-b border-border-primary bg-bg-primary/95 backdrop-blur-md">
        {/* Main Header */}
        <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-4 lg:h-16">
            {/* Logo */}
            <Link href="/home" className="shrink-0">
              <span className="text-h4 font-bold tracking-tight text-text-primary lg:text-h3">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Search */}
            <DesktopSearchBar />

            {/* Actions */}
            <HeaderActions />
          </div>
        </div>

        {/* Desktop Navigation with Mega Menu */}
        <MegaMenu items={mainNavigation} />
      </header>

      {/* Mobile search overlay */}
      <MobileSearchOverlay />
    </>
  );
}
