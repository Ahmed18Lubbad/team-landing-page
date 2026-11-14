import Link from "next/link";
import type { SiteInfo } from "@/types/content";

export default function Header({ site }: { site: SiteInfo }) {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {site.logoText}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm text-ink">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
