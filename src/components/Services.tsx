import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id="services" className="bg-sand/40">
      <FadeIn>
        <SectionHeader
          eyebrow="Services"
          title="Flooring made for how you live"
          subtitle="As a Carpet One store in Livermore, we offer Bioplanks, carpet tile, and carpet and flooring guidance tailored to your space."
        />
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <article className="group card-lift relative overflow-hidden rounded-[var(--radius-md)] border border-ink/8 bg-bg shadow-soft">
              <div
                className={[
                  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  service.motif === "plank" ? "motif-plank" : "motif-tile",
                ].join(" ")}
                aria-hidden="true"
              />
              <div className="relative aspect-[16/10] overflow-hidden image-zoom">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="relative p-6 md:p-8">
                <h3 className="font-serif text-2xl tracking-tight text-ink md:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-[var(--radius-sm)] bg-sand px-3 py-1.5 text-xs font-medium tracking-wide text-ink/80"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.cta.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-clay transition-colors hover:text-ink"
                >
                  {service.cta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
