import { showcaseIntro } from "@/lib/content";
import { Gallery } from "@/components/Gallery";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Showcase() {
  return (
    <Section id="showcase">
      <FadeIn>
        <SectionHeader
          eyebrow="Gallery"
          title={showcaseIntro.title}
          subtitle={showcaseIntro.subtitle}
        />
      </FadeIn>
      <FadeIn delay={0.08}>
        <Gallery />
      </FadeIn>
    </Section>
  );
}
