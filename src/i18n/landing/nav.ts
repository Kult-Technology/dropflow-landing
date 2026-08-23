import type { Locale } from "../locale";

const en = {
  how: "How it works",
  integrations: "Integrations",
  analytics: "Analytics",
  mcp: "MCP",
  extension: "Extension",
  logIn: "Log in",
  bookDemo: "Book a demo",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  home: "DropFlow home",
};

type NavCopy = typeof en;

const pl: NavCopy = {
  how: "Jak to działa",
  integrations: "Integracje",
  analytics: "Analityka",
  mcp: "MCP",
  extension: "Wtyczka",
  logIn: "Zaloguj się",
  bookDemo: "Umów demo",
  openMenu: "Otwórz menu",
  closeMenu: "Zamknij menu",
  home: "Strona główna DropFlow",
};

export const nav: Record<Locale, NavCopy> = { en, pl };
