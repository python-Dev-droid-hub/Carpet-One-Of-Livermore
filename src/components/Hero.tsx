import Image from "next/image";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Motif } from "@/components/ui/Motif";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      <Motif variant="tile" className="opacity-40" />
      <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-5">
          <FadeIn>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              {hero.support}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink/70">
              {hero.trustItems.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span className="text-sage/60" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-7">
          <FadeIn delay={0.12} className="relative mx-auto max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[var(--radius-md)] motif-tile opacity-50 md:-inset-6" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] shadow-lift sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src={hero.images.primary.src}
                alt={hero.images.primary.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 w-[42%] overflow-hidden rounded-[var(--radius-sm)] border-4 border-bg shadow-lift sm:right-8 md:-bottom-8 md:w-[38%]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={hero.images.secondary.src}
                  alt={hero.images.secondary.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
