"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/8 bg-bg/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#main"
          className="font-serif text-lg tracking-tight text-ink md:text-xl"
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-[var(--radius-sm)] bg-clay px-4 py-2.5 text-sm font-medium text-bg shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone}
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border border-ink/15 bg-bg/60 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in panel */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-ink/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Close menu overlay"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={[
            "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-bg shadow-lift transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex h-16 items-center justify-between border-b border-ink/8 px-5">
            <span className="font-serif text-base text-ink">{site.shortName}</span>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-ink"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-ink hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-clay px-4 py-3 text-sm font-medium text-bg"
              onClick={() => setOpen(false)}
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
