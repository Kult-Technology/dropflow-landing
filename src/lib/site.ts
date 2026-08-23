/** Outbound links and section anchors shared across the landing page. */

export const APP_URL = "https://app.dropflow.dev";
export const CONTACT_EMAIL = "kontakt@kulttechnology.pl";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const KULT_URL = "https://kulttechnology.pl";
export const KULT_DOMAIN = "kulttechnology.pl";

export const SECTION_IDS = {
  top: "top",
  how: "how",
  integrations: "integrations",
  analytics: "analytics",
  mcp: "mcp",
  extension: "extension",
  numbers: "numbers",
} as const;

/** Nav + footer product links, in the order the design lists them. */
export const NAV_LINKS = [
  { href: "#how", key: "how" },
  { href: "#integrations", key: "integrations" },
  { href: "#analytics", key: "analytics" },
  { href: "#mcp", key: "mcp" },
  { href: "#extension", key: "extension" },
] as const;

/** Absolute origin, used to build canonical and hreflang URLs at runtime. */
export const SITE_URL = "https://dropflow.dev";
export const OG_IMAGE_URL = `${SITE_URL}/dropflow-og.png`;
