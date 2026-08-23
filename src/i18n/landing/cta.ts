import type { Locale } from "../locale";

const en = {
  heading: "See it run on your own orders.",
  lead: "A short demo on your store, your products and your markets. We set up access and walk you through the first automated order.",
  bookDemo: "Book a demo",
  logIn: "Log in",
  note: "No public pricing. We quote per store setup.",
};

type CtaCopy = typeof en;

const pl: CtaCopy = {
  heading: "Zobacz to na własnych zamówieniach.",
  lead: "Krótkie demo na Twoim sklepie, Twoich produktach i Twoich rynkach. Konfigurujemy dostęp i przechodzimy z Tobą pierwsze automatyczne zamówienie.",
  bookDemo: "Umów demo",
  logIn: "Zaloguj się",
  note: "Bez cennika publicznego. Wycena pod konfigurację sklepu.",
};

export const cta: Record<Locale, CtaCopy> = { en, pl };
