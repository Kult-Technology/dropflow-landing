import type { Locale } from "../locale";
import { nav } from "./nav";
import { hero } from "./hero";
import { how } from "./how";
import { integrations } from "./integrations";
import { analytics } from "./analytics";
import { mcp } from "./mcp";
import { extension } from "./extension";
import { numbers } from "./numbers";
import { cta } from "./cta";
import { footer } from "./footer";
import { notFound } from "./notFound";
import { meta } from "./meta";

/**
 * One dictionary per landing-page section. Each is a `Record<Locale, T>` whose
 * `pl` half is type-annotated against `en`, so a missing or misspelled key in
 * either language is a compile error.
 */
const dictionaries = {
  nav,
  hero,
  how,
  integrations,
  analytics,
  mcp,
  extension,
  numbers,
  cta,
  footer,
  notFound,
  meta,
};

export type LandingCopy = {
  [K in keyof typeof dictionaries]: (typeof dictionaries)[K]["en"];
};

/** Flattens the per-section dictionaries down to the copy for one locale. */
export function getLandingCopy(locale: Locale): LandingCopy {
  return Object.fromEntries(
    Object.entries(dictionaries).map(([key, dictionary]) => [key, dictionary[locale]]),
  ) as LandingCopy;
}
