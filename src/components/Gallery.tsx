"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  galleryItems,
  showcaseFilters,
  type ShowcaseCategory,
} from "@/lib/content";

/** Masonry-style gallery with filter chips and accessible lightbox */
export function Gallery() {
  const [filter, setFilter] = useState<ShowcaseCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const active = galleryItems.find((item) => item.id === activeId) ?? null;

  const openLightbox = useCallback((id: string, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setActiveId(id);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveId(null);
    dialogRef.current?.close();
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeId) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeId]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setActiveId(null);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter gallery"
      >
        {showcaseFilters.map((chip) => {
          const selected = filter === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(chip.id)}
              className={[
                "rounded-[var(--radius-sm)] px-4 py-2 text-sm font-medium transition-colors",
                selected
                  ? "bg-ink text-bg"
                  : "bg-sand text-ink/80 hover:bg-sand/80 hover:text-ink",
              ].join(" ")}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="group relative block w-full overflow-hidden rounded-[var(--radius-sm)] shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              onClick={(e) => openLightbox(item.id, e.currentTarget)}
              aria-label={`View larger: ${item.alt}`}
            >
              <span
                className={[
                  "relative block w-full",
                  index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]",
                ].join(" ")}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 m-0 max-h-none max-w-none h-full w-full bg-ink/85 p-4 backdrop:bg-transparent open:flex open:items-center open:justify-center"
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeLightbox();
        }}
        onCancel={(e) => {
          e.preventDefault();
          closeLightbox();
        }}
      >
        {active ? (
          <div className="relative w-full max-w-4xl rounded-[var(--radius-md)] bg-bg p-3 shadow-lift md:p-4">
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -right-2 -top-2 z-10 inline-flex size-10 items-center justify-center rounded-full bg-bg text-ink shadow-soft md:right-2 md:top-2"
              aria-label="Close image preview"
            >
              <X className="size-5" />
            </button>
            <p id={titleId} className="sr-only">
              {active.alt}
            </p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-sm)]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 px-1 text-sm text-ink-muted">{active.alt}</p>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
