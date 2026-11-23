import Image from "next/image";
import { about, site } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { Motif } from "@/components/ui/Motif";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <Motif variant="tile" className="opacity-[0.28]" />

      <div className="container-page relative">
        <FadeIn className="mb-12 grid grid-cols-1 gap-6 border-b border-ink/10 pb-10 md:mb-16 md:grid-cols-12 md:gap-8 md:pb-14">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
              {about.eyebrow}
            </p>
            <p className="mt-4 font-serif text-sm italic tracking-wide text-clay md:text-base">
              {site.location}
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight text-ink md:text-4xl lg:text-[2.85rem]">
              {about.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {about.lead}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Image composition — fixed working Unsplash sources + sand fallback */}
          <FadeIn delay={0.06} className="relative pb-10 lg:col-span-6 xl:col-span-7 lg:pb-16">
            <div className="relative">
              <div
                className="absolute -left-2 top-10 hidden h-[70%] w-14 rounded-[var(--radius-sm)] bg-sand motif-plank md:block lg:-left-3 lg:w-16"
                aria-hidden="true"
              />
              <div className="relative ml-0 overflow-hidden rounded-[var(--radius-md)] bg-sand shadow-lift md:ml-6 lg:ml-8">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src={about.images.primary.src}
                    alt={about.images.primary.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 right-2 w-[46%] overflow-hidden rounded-[var(--radius-sm)] border-[5px] border-bg bg-sand shadow-lift sm:right-4 md:-bottom-4 md:w-[40%]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={about.images.secondary.src}
                    alt={about.images.secondary.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <figure className="mt-14 hidden max-w-md lg:mt-16 lg:block">
              <blockquote className="border-l-2 border-clay pl-5">
                <p className="font-serif text-xl leading-snug tracking-tight text-ink md:text-2xl">
                  {about.pullQuote}
                </p>
              </blockquote>
            </figure>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-6 xl:col-span-5 lg:pt-2">
            <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <figure className="mt-8 border-l-2 border-clay pl-5 lg:hidden">
              <blockquote>
                <p className="font-serif text-xl leading-snug tracking-tight text-ink">
                  {about.pullQuote}
                </p>
              </blockquote>
            </figure>

            <Stagger className="mt-10 space-y-0 border-t border-ink/10">
              {about.highlights.map((item, index) => (
                <StaggerItem key={item.label}>
                  <div className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/10 py-5 transition-colors hover:bg-sand/40 md:grid-cols-[3.5rem_1fr] md:gap-5">
                    <span className="font-serif text-2xl text-clay/80 tabular-nums md:text-[1.75rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl tracking-tight text-ink md:text-[1.35rem]">
                        {item.label}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-clay transition-colors hover:text-ink"
            >
              Visit us or request a quote
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
