export type Locale = "en" | "pl";

export const LOCALES: readonly Locale[] = ["en", "pl"] as const;

/** English lives at the root so it stays the canonical / x-default URL. */
export const LOCALE_PATHS: Record<Locale, string> = {
  en: "/",
  pl: "/pl",
};

export const DEFAULT_LOCALE: Locale = "en";

/** Key the design uses to remember the visitor's choice across visits. */
const LOCALE_STORAGE_KEY = "dropflow-lang";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "pl";
}

/** Reads the remembered locale, ignoring storage that is unavailable or blocked. */
export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* private mode / storage disabled - the choice just won't persist */
  }
}

/**
 * The URL decides which language is shown, never the browser's Accept-Language.
 * Serving two languages at one URL is what hreflang exists to prevent, and
 * Google advises against redirecting on detected language.
 */
export function localeFromPath(pathname: string): Locale {
  const normalised = pathname.replace(/\/+$/, "").toLowerCase();
  return normalised === LOCALE_PATHS.pl ? "pl" : DEFAULT_LOCALE;
}

/** Keeps the hash when swapping locale, so a #how deep link survives the switch. */
export function pathForLocale(locale: Locale, hash = ""): string {
  return `${LOCALE_PATHS[locale]}${hash}`;
}
