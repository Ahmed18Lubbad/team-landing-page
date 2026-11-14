import type { Config } from "tailwindcss";

// Color values themselves live in /data/content.json under "theme.colors"
// and are injected as CSS custom properties in src/app/layout.tsx.
// Tailwind just points its palette at those variables, so editing the
// JSON file re-themes the whole site without touching this file.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        accent: "var(--color-accent)",
        "accent-secondary": "var(--color-accent-secondary)",
        hairline: "var(--color-hairline)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
