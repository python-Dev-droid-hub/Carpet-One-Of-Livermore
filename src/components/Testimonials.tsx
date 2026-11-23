"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = items[index] ?? items[0];

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const section = document.getElementById("reviews");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-sand/50 py-20 md:py-28"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      {/* Soft weave band */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 motif-tile opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 hidden h-64 w-64 rounded-full bg-clay/10 blur-3xl md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 hidden h-56 w-56 rounded-full bg-sage/15 blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.12] tracking-tight text-ink md:text-4xl lg:text-[2.85rem]">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            {testimonials.subtitle}
          </p>
        </FadeIn>

        {/* Sample-tile signature row */}
        <div
          className="mx-auto mb-10 flex max-w-xs justify-center gap-2 md:mb-12"
          aria-hidden="true"
        >
          {items.map((_, i) => (
            <span
              key={i}
              className={[
                "h-2 flex-1 rounded-sm transition-colors",
                i === index ? "bg-clay" : i % 2 === 0 ? "bg-ink/15" : "bg-sage/35",
              ].join(" ")}
            />
          ))}
        </div>

        <FadeIn>
          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-ink/8 bg-bg shadow-lift">
              {/* Plank accent strip */}
              <div
                className="h-2 w-full motif-plank bg-sand"
                aria-hidden="true"
              />

              <div className="relative px-6 py-10 sm:px-10 md:px-14 md:py-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name + index}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Review ${index + 1} of ${items.length}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                  >
                    <span className="inline-flex rounded-[var(--radius-sm)] bg-sand px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/65">
                      {current.focus}
                    </span>

                    <blockquote className="mx-auto mt-8 max-w-3xl">
                      <p className="font-serif text-2xl leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.15rem] md:leading-[1.3]">
                        “{current.quote}”
                      </p>
                    </blockquote>

                    <footer className="mt-10 flex flex-col items-center gap-3">
                      <div
                        className="flex size-12 items-center justify-center rounded-full bg-ink font-serif text-sm tracking-wide text-bg"
                        aria-hidden="true"
                      >
                        {current.initials}
                      </div>
                      <div>
                        <cite className="not-italic text-base font-medium text-ink">
                          {current.name}
                        </cite>
                        <p className="mt-0.5 text-sm text-ink-muted">
                          {current.detail}
                        </p>
                      </div>
                    </footer>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-ink/15 bg-bg text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift"
                aria-label="Previous review"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Choose review">
                {items.map((item, i) => (
                  <button
                    key={item.initials + i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={[
                      "rounded-full transition-all",
                      i === index
                        ? "h-2.5 w-8 bg-clay"
                        : "size-2.5 bg-ink/20 hover:bg-ink/40",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-ink/15 bg-bg text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift"
                aria-label="Next review"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-ink/45">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
