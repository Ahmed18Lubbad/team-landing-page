import Link from "next/link";
import type { FooterContent, SiteInfo } from "@/types/content";

export default function Footer({
  footer,
  site,
}: {
  footer: FooterContent;
  site: SiteInfo;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          © {year} {footer.text}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            {footer.social.map((link) => (
              <li key={link.platform}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {link.platform}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="sr-only">{site.name}</p>
    </footer>
  );
}
