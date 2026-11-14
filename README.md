# Birchwood Collective — Team Landing Page

A responsive, one-page site built with Next.js and TypeScript, styled with
Tailwind CSS. Every piece of text, every link, and every team member is
stored in a single JSON file, so day-to-day edits don't require touching
any code.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edits to `data/content.json` or any
file in `src/` hot-reload automatically.

To build for production:

```bash
npm run build
npm start
```

This project deploys cleanly to Vercel, Netlify, or any host that
supports Next.js — push it to a Git repo and import it, no extra
configuration needed.

## The one file you'll edit most: `data/content.json`

Everything visible on the page — the hero text, the About Us copy, the
team roster, the call-to-action, the footer links, and even the color
palette — lives in `data/content.json`. You do not need to know React
or TypeScript to update the site; you're editing a plain JSON object.

### Adding or removing a team member

Each person is one object inside `team.members`. Copy an existing
entry, change the values, and give it a unique `id`:

```json
{
  "id": "your-unique-id",
  "name": "Full Name",
  "role": "Job Title",
  "photo": {
    "src": "/images/team/your-photo.jpg",
    "alt": "Portrait of Full Name"
  },
  "bio": "A sentence or two about this person.",
  "portfolio": { "label": "View portfolio", "href": "https://example.com" },
  "social": [
    { "platform": "LinkedIn", "href": "https://linkedin.com/in/..." }
  ]
}
```

- `social` is optional — delete it, or leave the array empty (`[]`), if
  someone doesn't want extra links.
- The team grid (in `src/components/Team.tsx`) automatically reflows
  for any number of members: 3 columns on desktop, 2 on tablet, 1 on
  mobile. You don't need to adjust layout code when you add or remove
  someone.
- Deleting a member is just deleting their object from the array.

### Adding a team photo

1. Drop the image file into `public/images/team/` (any name, but match
   it to the `photo.src` path you use in the JSON — paths starting
   with `/` refer to the `public/` folder).
2. Point `photo.src` at it, e.g. `/images/team/jane-doe.jpg`.
3. Photos closer to a 4:5 ratio (portrait, slightly taller than wide)
   will crop most naturally into the card, but any photo will work —
   it's automatically cropped to fit (`object-cover`) rather than
   stretched.

**Using externally hosted images instead:** `photo.src` can also be a
full `https://...` URL — a link to an image in your CMS, a cloud
bucket, or anywhere else. `next.config.mjs` is already configured to
allow images from any HTTPS domain, so no extra setup is required.

Placeholder images are included under `public/images/` so the site
renders correctly out of the box — replace them with real photos when
you're ready.

### Editing text, links, and the color palette

- **Hero, About Us, call-to-action, footer:** each section's text and
  links are plain strings and link objects (`{ "label": ..., "href": ... }`)
  inside the matching key (`hero`, `about`, `cta`, `footer`) in
  `content.json`. Change the text, save, and the page updates.
- **Links:** every link in the site is a `{ "label": "...", "href": "..." }`
  pair. `href` can be an in-page anchor (`"#team"`), a full URL
  (`"https://..."`), or a `mailto:` address.
- **Colors:** the `theme.colors` object at the top of `content.json`
  controls the entire palette (background, text, accent color, dividing
  lines). Change a hex value there and every component that uses that
  color updates — you never need to search through component files for
  hardcoded colors.
- **Navigation links:** `site.navLinks` controls the header menu;
  `footer.links` controls the footer menu. Add, remove, or reorder
  entries freely.

After editing the JSON, restart `npm run dev` if you don't see the
change appear (this is rarely necessary, but JSON imports are
occasionally cached more aggressively than other file types).

## How the code is organized

```
data/
  content.json          ← all editable content and theme colors
src/
  types/content.ts       ← TypeScript shape of content.json
  lib/getContent.ts      ← loads and types content.json
  app/
    layout.tsx            ← fonts, <html>/<body>, injects theme colors as CSS variables
    page.tsx              ← assembles the sections in order
    globals.css           ← Tailwind entry point, focus states, reduced-motion support
  components/
    Header.tsx            ← sticky top nav, built from site.navLinks
    Hero.tsx               ← headline, subheadline, CTAs, optional stats
    AboutUs.tsx             ← heading, body paragraphs, highlights, image
    Team.tsx                 ← heading + responsive grid of TeamMemberCard
    TeamMemberCard.tsx        ← one team member: photo, name, role, bio, portfolio link
    CallToAction.tsx           ← contact/CTA band
    Footer.tsx                  ← footer nav, social links, copyright
public/
  images/                 ← hero images and team photos referenced from content.json
```

### Why it's structured this way

- **One content file, typed end to end.** `content.json` is imported
  directly (not fetched over the network) and cast to the
  `SiteContent` type in `src/types/content.ts`. This means if you
  remove a field a component relies on, or misspell a key, TypeScript
  will flag it when you run `npm run build`, rather than failing
  silently in the browser.
- **Components take content as props, not imports.** Every component
  (`Hero`, `AboutUs`, `Team`, etc.) receives its slice of the content
  as a prop from `page.tsx`, rather than importing `content.json`
  itself. This keeps each component reusable and makes `page.tsx` the
  single place that shows the overall structure of the page — reorder
  sections by reordering the lines in `page.tsx`.
- **Colors as CSS variables, not Tailwind constants.** Rather than
  hardcoding hex values in `tailwind.config.ts`, the config points
  Tailwind's palette (`bg-ink`, `text-accent`, `border-hairline`, etc.)
  at CSS custom properties (`var(--color-ink)`...). Those variables are
  set once, in `layout.tsx`, directly from `content.json`. Practically,
  this means the color palette is editable from the same JSON file as
  the text, with no code changes.
- **Images via `next/image`.** All photos use Next.js's built-in
  `Image` component, which automatically serves correctly sized and
  compressed images to each device. `next.config.mjs` allows images
  from any HTTPS domain so you aren't limited to files inside
  `public/`.
- **Tailwind CSS for styling.** Utility classes keep styling colocated
  with markup, which makes it easy to see and adjust a section's
  appearance without hunting through separate CSS files. The only
  "real" CSS is in `globals.css` (Tailwind's entry point, plus a few
  accessibility defaults like visible focus rings and respecting
  `prefers-reduced-motion`).

## Adding a new section

1. Create a component in `src/components/`, e.g. `Testimonials.tsx`,
   that accepts typed content as a prop (add the shape to
   `src/types/content.ts` first).
2. Add the matching data under a new top-level key in
   `data/content.json` (e.g. `"testimonials": { ... }`).
3. Import and render the component in `src/app/page.tsx`, in whatever
   position you want it to appear.

## Browser and device support

The layout is built mobile-first with Tailwind's responsive utilities
and checked at mobile, tablet, and desktop widths. It respects
`prefers-reduced-motion`, keeps visible keyboard focus states on every
link and button, and uses semantic HTML (`<header>`, `<main>`, `<nav>`,
`<footer>`, heading levels in order) for screen reader users.

## Requirements

- Node.js 18.17 or later
- No database or backend required — this is a fully static page once built
