import type { Locale } from "../locale";
import data from "./meta.json";

/**
 * Head copy per language, kept in JSON because two consumers need it: this
 * module (for the runtime head swap) and scripts/prerender-locales.mjs, which
 * bakes a static Polish head into dist/pl.html at build time.
 *
 * `title` stays under ~60 characters and `description` under ~155 so neither is
 * truncated in search results.
 */
export type MetaCopy = (typeof data)["en"];

export const meta: Record<Locale, MetaCopy> = data;
