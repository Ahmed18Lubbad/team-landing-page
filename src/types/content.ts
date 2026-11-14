// Shared TypeScript types for the shape of /data/content.json.
// Keeping this in sync with the JSON file gives you autocomplete and
// type-checking everywhere the content is used.

export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface ImageItem {
  src: string;
  alt: string;
}

export interface ThemeColors {
  ink: string;
  paper: string;
  accent: string;
  accentSecondary: string;
  hairline: string;
  muted: string;
}

export interface SiteInfo {
  name: string;
  logoText: string;
  tagline: string;
  metaDescription: string;
  navLinks: LinkItem[];
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: LinkItem;
  secondaryCta?: LinkItem;
  image: ImageItem;
  stats?: HeroStat[];
}

export interface Highlight {
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  body: string[];
  highlights: Highlight[];
  image: ImageItem;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: ImageItem;
  bio: string;
  portfolio: LinkItem;
  social?: SocialLink[];
}

export interface TeamContent {
  heading: string;
  subheading: string;
  members: TeamMember[];
}

export interface CtaContent {
  heading: string;
  body: string;
  button: LinkItem;
}

export interface FooterContent {
  text: string;
  links: LinkItem[];
  social: SocialLink[];
}

export interface SiteContent {
  theme: { colors: ThemeColors };
  site: SiteInfo;
  hero: HeroContent;
  about: AboutContent;
  team: TeamContent;
  cta: CtaContent;
  footer: FooterContent;
}
