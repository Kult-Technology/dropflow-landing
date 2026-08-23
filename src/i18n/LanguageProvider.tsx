import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  localeFromPath,
  pathForLocale,
  readStoredLocale,
  storeLocale,
  type Locale,
} from "./locale";
import { getLandingCopy, type LandingCopy } from "./landing";
import { useDocumentHead } from "./useDocumentHead";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Copy for the active locale. */
  t: LandingCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // The URL is the single source of truth, so /pl and / can be indexed separately.
  const locale = localeFromPath(pathname);
  const copy = useMemo(() => getLandingCopy(locale), [locale]);

  useDocumentHead(locale, copy);

  /*
   * Send a visitor who previously *chose* Polish to /pl when they land on the
   * root. This keys off an explicit click, never Accept-Language: crawlers have
   * no stored preference, so / always renders and indexes as English.
   */
  useEffect(() => {
    if (locale !== "en") return;
    if (readStoredLocale() !== "pl") return;
    navigate(pathForLocale("pl", hash), { replace: true });
  }, [locale, hash, navigate]);

  const setLocale = useCallback(
    (next: Locale) => {
      storeLocale(next);
      navigate(pathForLocale(next, hash));
    },
    [hash, navigate],
  );

  const toggleLocale = useCallback(
    () => setLocale(locale === "en" ? "pl" : "en"),
    [locale, setLocale],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: copy }),
    [locale, setLocale, toggleLocale, copy],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return context;
}

/** Shorthand for components that only need the copy. */
export function useCopy(): LandingCopy {
  return useLanguage().t;
}
