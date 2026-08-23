import { describe, it, expect } from "vitest";
import { localeFromPath, pathForLocale, LOCALE_PATHS } from "@/i18n/locale";
import { getLandingCopy } from "@/i18n/landing";

/*
 * localeFromPath is what makes / and /pl indexable as separate pages, so the
 * mapping is worth pinning down: anything that is not the Polish path has to
 * fall back to English rather than throwing or returning undefined.
 */
describe("localeFromPath", () => {
  it("maps the root to English and /pl to Polish", () => {
    expect(localeFromPath("/")).toBe("en");
    expect(localeFromPath(LOCALE_PATHS.pl)).toBe("pl");
  });

  it("tolerates trailing slashes and casing", () => {
    expect(localeFromPath("/pl/")).toBe("pl");
    expect(localeFromPath("/PL")).toBe("pl");
  });

  it("falls back to English for unknown paths", () => {
    expect(localeFromPath("/plans")).toBe("en");
    expect(localeFromPath("/anything/else")).toBe("en");
  });
});

describe("pathForLocale", () => {
  it("round-trips with localeFromPath", () => {
    expect(localeFromPath(pathForLocale("en"))).toBe("en");
    expect(localeFromPath(pathForLocale("pl"))).toBe("pl");
  });

  it("keeps a section hash so deep links survive a language switch", () => {
    expect(pathForLocale("pl", "#analytics")).toBe("/pl#analytics");
  });
});

describe("getLandingCopy", () => {
  it("returns copy in the requested language", () => {
    expect(getLandingCopy("en").nav.bookDemo).toBe("Book a demo");
    expect(getLandingCopy("pl").nav.bookDemo).toBe("Umów demo");
  });

  it("exposes the same keys for both locales", () => {
    const en = getLandingCopy("en");
    const pl = getLandingCopy("pl");
    expect(Object.keys(pl).sort()).toEqual(Object.keys(en).sort());
    for (const section of Object.keys(en) as Array<keyof typeof en>) {
      expect(Object.keys(pl[section]).sort()).toEqual(Object.keys(en[section]).sort());
    }
  });
});
