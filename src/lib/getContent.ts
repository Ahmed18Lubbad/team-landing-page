import content from "@/data/content.json";
import type { SiteContent } from "@/types/content";

// Central place that reads /data/content.json. Importing the JSON
// directly (rather than fetching it) means the data is bundled at
// build time and is fully type-checked against SiteContent.
export function getContent(): SiteContent {
  return content as SiteContent;
}
