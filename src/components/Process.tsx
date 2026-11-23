"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { process } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 40%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  const scaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <Section id="process">
      <FadeIn>
        <SectionHeader
          eyebrow="Process"
          title={process.title}
          subtitle={process.subtitle}
          align="center"
        />
      </FadeIn>

      <div ref={trackRef} className="relative mx-auto max-w-5xl pt-4">
        {/* Progress line — horizontal on md+, vertical stack on mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-ink/10 md:left-0 md:right-0 md:top-7 md:h-px md:w-auto md:bottom-auto" aria-hidden="true">
          {!reduceMotion ? (
            <>
              <motion.div
                className="hidden origin-left bg-clay md:block md:h-full"
                style={{ scaleX }}
              />
              <motion.div
                className="origin-top bg-clay md:hidden"
                style={{
                  scaleY: progress,
                  width: 2,
                  height: "100%",
                }}
              />
            </>
          ) : (
            <div className="h-full w-full bg-clay/40 md:h-full" />
          )}
        </div>

        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {process.steps.map((step, index) => (
            <li key={step.title} className="relative pl-10 md:pl-0 md:pt-0 md:text-center">
              <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-ink/15 bg-bg font-serif text-sm text-clay shadow-soft md:relative md:mx-auto md:mb-5 md:size-14 md:text-lg">
                {index + 1}
              </div>
              <h3 className="font-serif text-xl tracking-tight text-ink md:text-[1.35rem]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
