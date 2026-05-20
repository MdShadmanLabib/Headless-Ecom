"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUIStore } from "@/stores/ui-store";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchIcon, CloseIcon } from "./icons";
import { cn } from "@/utils/cn";
import { SEARCH_DEBOUNCE_MS } from "@/config/constants";

const popularSearches = [
  "Gaming Laptop",
  "RTX 5090",
  "Mechanical Keyboard",
  "Monitor 4K",
  "SSD 1TB",
];

export function DesktopSearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedQuery = useDebounce(query, SEARCH_DEBOUNCE_MS);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const showDropdown = isFocused && (query.length > 0 || debouncedQuery.length === 0);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        setIsFocused(false);
        inputRef.current?.blur();
      }
    },
    [query, router],
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative hidden max-w-xl flex-1 px-4 md:block lg:px-8">
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            "flex h-10 items-center gap-2 rounded-lg border bg-bg-secondary px-3 transition-all",
            isFocused
              ? "border-accent shadow-[0_0_0_1px_var(--color-accent)]"
              : "border-border-primary hover:border-border-secondary",
          )}
        >
          <SearchIcon size={16} className="shrink-0 text-text-tertiary" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search products, categories, brands..."
            className="h-full flex-1 bg-transparent text-body-sm text-text-primary placeholder:text-text-tertiary focus:outline-none"
            aria-label="Search products"
            aria-autocomplete="list"
            role="combobox"
            aria-controls="search-listbox"
            aria-expanded={showDropdown}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="shrink-0 rounded p-0.5 text-text-tertiary transition-colors hover:text-text-secondary"
              aria-label="Clear search"
            >
              <CloseIcon size={14} />
            </button>
          )}
        </div>
      </form>

      {/* Autocomplete dropdown */}
      {showDropdown && (
        <div className="absolute left-4 right-4 top-full z-[var(--z-dropdown)] pt-1 lg:left-8 lg:right-8">
          <div id="search-listbox" role="listbox" className="overflow-hidden rounded-xl border border-border-primary bg-bg-secondary shadow-xl">
            {debouncedQuery.length > 0 ? (
              <SearchSuggestions
                query={debouncedQuery}
                onSelect={() => setIsFocused(false)}
              />
            ) : (
              <div className="p-3">
                <p className="mb-2 px-2 text-caption font-semibold uppercase tracking-wider text-text-tertiary">
                  Popular Searches
                </p>
                <ul>
                  {popularSearches.map((term) => (
                    <li key={term}>
                      <Link
                        href={`/search?q=${encodeURIComponent(term)}`}
                        onClick={() => setIsFocused(false)}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
                      >
                        <SearchIcon size={14} className="text-text-tertiary" />
                        {term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchSuggestions({
  query,
  onSelect,
}: {
  query: string;
  onSelect: () => void;
}) {
  return (
    <div className="p-3">
      <p className="mb-2 px-2 text-caption font-semibold uppercase tracking-wider text-text-tertiary">
        Suggestions for &ldquo;{query}&rdquo;
      </p>
      <ul>
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={onSelect}
              className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-bg-tertiary"
            >
              <div className="h-10 w-10 shrink-0 rounded-md bg-bg-tertiary" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-body-sm text-text-primary">
                  {query} Product Result {i}
                </p>
                <p className="text-caption text-accent">৳XX,XXX</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={`/search?q=${encodeURIComponent(query)}`}
        onClick={onSelect}
        className="mt-2 flex items-center justify-center gap-1 rounded-md py-2 text-body-sm font-medium text-accent transition-colors hover:bg-accent/5"
      >
        View all results
      </Link>
    </div>
  );
}

export function MobileSearchOverlay() {
  const isSearchOpen = useUIStore((s) => s.isSearchOpen);

  if (!isSearchOpen) return null;

  return <MobileSearchContent />;
}

function MobileSearchContent() {
  const closeSearch = useUIStore((s) => s.closeSearch);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        closeSearch();
      }
    },
    [query, router, closeSearch],
  );

  return (
    <div className="fixed inset-0 z-[var(--z-overlay)] md:hidden">
      <div className="absolute inset-0 bg-overlay" onClick={closeSearch} />
      <div className="relative bg-bg-secondary p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-accent bg-bg-primary px-3 shadow-[0_0_0_1px_var(--color-accent)]">
            <SearchIcon size={16} className="shrink-0 text-text-tertiary" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="h-10 flex-1 bg-transparent text-body-sm text-text-primary placeholder:text-text-tertiary focus:outline-none"
              aria-label="Search products"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="text-text-tertiary"
                aria-label="Clear"
              >
                <CloseIcon size={14} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={closeSearch}
            className="rounded-lg px-3 py-2.5 text-body-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Cancel
          </button>
        </form>

        {/* Quick search suggestions */}
        <div className="mt-3 space-y-1">
          {popularSearches.map((term) => (
            <Link
              key={term}
              href={`/search?q=${encodeURIComponent(term)}`}
              onClick={closeSearch}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-body-sm text-text-secondary transition-colors hover:bg-bg-tertiary"
            >
              <SearchIcon size={14} className="text-text-tertiary" />
              {term}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
