import Image from "next/image";
import type { AboutContent } from "@/types/content";

export default function AboutUs({ about }: { about: AboutContent }) {
  return (
    <section id="about" className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {about.heading}
          </h2>
          <div className="space-y-5">
            {about.body.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-prose text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-sm bg-hairline/40 sm:order-1 lg:order-none">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>

          <dl className="order-1 grid gap-8 border-t border-hairline pt-8 sm:order-2 sm:grid-cols-1 lg:order-none">
            {about.highlights.map((item) => (
              <div key={item.title}>
                <dt className="font-display text-lg font-medium text-ink">
                  {item.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
