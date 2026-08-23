/*
 * Writes dist/pl.html: a copy of the built index.html with the Polish head
 * baked in.
 *
 * Why this exists: the app patches the head at runtime, which Google picks up
 * because it renders JavaScript - but social scrapers (Slack, Facebook,
 * LinkedIn, X) never do. Without this, sharing a /pl link produced the English
 * card, and a non-rendering crawler saw /pl declare the English URL as its
 * canonical, which asks search engines not to index it at all.
 *
 * Copy comes from src/i18n/landing/meta.json so the static head and the runtime
 * head can never drift apart.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const SITE = "https://dropflow.dev";
const meta = JSON.parse(readFileSync(resolve(root, "src/i18n/landing/meta.json"), "utf8"));

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeText = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Replaces the content="" of a meta tag, failing loudly if the tag moved. */
function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${key}"[^>]*\\scontent=")[^"]*(")`, "i");
  if (!pattern.test(html)) throw new Error(`prerender: no <meta ${attr}="${key}"> in index.html`);
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
}

function setLink(html, rel, href, hreflang) {
  const attrs = hreflang ? `rel="${rel}"\\s+hreflang="${hreflang}"` : `rel="${rel}"`;
  const pattern = new RegExp(`(<link\\s+${attrs}\\s+href=")[^"]*(")`, "i");
  if (!pattern.test(html)) throw new Error(`prerender: no <link rel="${rel}" hreflang="${hreflang ?? "-"}">`);
  return html.replace(pattern, `$1${escapeAttr(href)}$2`);
}

function buildLocale(html, locale, path) {
  const copy = meta[locale];
  const url = `${SITE}${path}`;
  const alternate = locale === "en" ? "pl_PL" : "en_US";

  let out = html
    .replace(/<html lang="[^"]*"/, `<html lang="${locale}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeText(copy.title)}</title>`);

  out = setMeta(out, "name", "description", copy.description);
  out = setLink(out, "canonical", url);

  out = setMeta(out, "property", "og:title", copy.socialTitle);
  out = setMeta(out, "property", "og:description", copy.socialDescription);
  out = setMeta(out, "property", "og:url", url);
  out = setMeta(out, "property", "og:image:alt", copy.imageAlt);
  out = setMeta(out, "property", "og:locale", copy.ogLocale);
  out = setMeta(out, "property", "og:locale:alternate", alternate);

  out = setMeta(out, "name", "twitter:title", copy.socialTitle);
  out = setMeta(out, "name", "twitter:description", copy.socialDescription);
  out = setMeta(out, "name", "twitter:image:alt", copy.imageAlt);

  // the <noscript> fallback is the only body content a non-rendering client sees
  out = out
    .replace(/(<noscript>[\s\S]*?<h1>)[\s\S]*?(<\/h1>)/, `$1${escapeText(copy.noscriptHeading)}$2`)
    .replace(/(<noscript>[\s\S]*?<h1>[\s\S]*?<\/h1>\s*<p>)[\s\S]*?(<\/p>)/, `$1\n        ${escapeText(copy.noscriptBody)}\n      $2`)
    .replace(/(mailto:kontakt@kulttechnology\.pl">)[^<]*(<\/a>)/, `$1${escapeText(copy.noscriptDemo)}$2`)
    .replace(/(https:\/\/app\.dropflow\.dev">)[^<]*(<\/a>)/, `$1${escapeText(copy.noscriptLogin)}$2`);

  return out;
}

const source = readFileSync(resolve(root, "dist/index.html"), "utf8");

for (const [locale, { path, file }] of Object.entries({
  en: { path: "/", file: "dist/index.html" },
  pl: { path: "/pl", file: "dist/pl.html" },
})) {
  const html = buildLocale(source, locale, path);
  writeFileSync(resolve(root, file), html);
  console.log(`  ${file.padEnd(18)} lang=${locale}  canonical=${SITE}${path}`);
}
