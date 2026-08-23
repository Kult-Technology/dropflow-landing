import { useEffect } from "react";
import { LOCALES, LOCALE_PATHS, type Locale } from "./locale";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site";
import type { LandingCopy } from "./landing";

const absolute = (locale: Locale) => new URL(LOCALE_PATHS[locale], SITE_URL).href;

/** Sets (or creates) a <meta> by name or property. */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.head.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    if (hreflang) tag.setAttribute("hreflang", hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

/**
 * Keeps the document head in step with the active locale.
 *
 * index.html ships the English defaults so a crawler that never runs the bundle
 * still sees a complete head; this rewrites title, description, canonical and
 * the social tags when /pl is rendered. The hreflang set is identical on both
 * URLs, which is what search engines require for them to be treated as a pair.
 */
export function useDocumentHead(locale: Locale, copy: LandingCopy): void {
  const { meta } = copy;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = meta.title;

    setMeta("name", "description", meta.description);

    setLink("canonical", absolute(locale));
    LOCALES.forEach((other) => setLink("alternate", absolute(other), other));
    setLink("alternate", absolute("en"), "x-default");

    setMeta("property", "og:title", meta.socialTitle);
    setMeta("property", "og:description", meta.socialDescription);
    setMeta("property", "og:url", absolute(locale));
    setMeta("property", "og:image", OG_IMAGE_URL);
    setMeta("property", "og:image:alt", meta.imageAlt);
    setMeta("property", "og:locale", meta.ogLocale);
    setMeta("property", "og:locale:alternate", locale === "en" ? "pl_PL" : "en_US");

    setMeta("name", "twitter:title", meta.socialTitle);
    setMeta("name", "twitter:description", meta.socialDescription);
    setMeta("name", "twitter:image", OG_IMAGE_URL);
    setMeta("name", "twitter:image:alt", meta.imageAlt);
  }, [locale, meta, copy]);
}
