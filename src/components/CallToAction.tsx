import Link from "next/link";
import type { CtaContent } from "@/types/content";

export default function CallToAction({ cta }: { cta: CtaContent }) {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 py-16 sm:px-10 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70 sm:text-lg">
            {cta.body}
          </p>
        </div>
        <Link
          href={cta.button.href}
          className="inline-flex shrink-0 items-center rounded-sm bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          {cta.button.label}
        </Link>
      </div>
    </section>
  );
}
