import { Compass, Hammer, Heart, Sparkles } from "lucide-react";
import { whyUs } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { Section, SectionHeader } from "@/components/ui/Section";

const icons = {
  compass: Compass,
  sparkles: Sparkles,
  hammer: Hammer,
  heart: Heart,
} as const;

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-sand/35">
      <FadeIn>
        <SectionHeader
          eyebrow="Why us"
          title={whyUs.title}
          subtitle={whyUs.subtitle}
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <StaggerItem key={item.title}>
              <article className="h-full rounded-[var(--radius-md)] border border-ink/8 bg-bg p-6 shadow-soft">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] bg-sand text-clay">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
