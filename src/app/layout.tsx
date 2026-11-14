import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { getContent } from "@/lib/getContent";

// Two deliberately paired typefaces: Fraunces is a characterful serif
// for headlines, IBM Plex Sans is a clean, neutral sans for body copy
// and UI. Loaded with next/font so there is no extra network request
// and no layout shift.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export function generateMetadata(): Metadata {
  const { site } = getContent();
  return {
    title: site.name,
    description: site.metaDescription,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = getContent();
  const { colors } = theme;

  // Theme colors from content.json become CSS custom properties here,
  // so every component (and tailwind.config.ts) can reference them as
  // var(--color-...) without hardcoding hex values anywhere else.
  const themeStyle = {
    "--color-ink": colors.ink,
    "--color-paper": colors.paper,
    "--color-accent": colors.accent,
    "--color-accent-secondary": colors.accentSecondary,
    "--color-hairline": colors.hairline,
    "--color-muted": colors.muted,
  } as React.CSSProperties;

  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body style={themeStyle} className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
