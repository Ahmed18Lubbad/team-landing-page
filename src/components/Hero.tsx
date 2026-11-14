import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section id="top" className="border-b border-hairline">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <h1 className="max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={hero.secondaryCta.href}
                className="text-sm font-medium text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>

          {hero.stats && hero.stats.length > 0 && (
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-medium text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-hairline/40 lg:aspect-[3/4]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
