import type { Locale } from "../locale";

const en = {
  blurb: "Dropshipping automation for Shoper and Shopify stores buying from AliExpress.",
  productHeading: "Product",
  contactHeading: "Contact",
  languageHeading: "Language",
  logInToApp: "Log in to the app",
};

type FooterCopy = typeof en;

const pl: FooterCopy = {
  blurb: "Automatyzacja dropshippingu dla sklepów Shoper i Shopify kupujących w AliExpress.",
  productHeading: "Produkt",
  contactHeading: "Kontakt",
  languageHeading: "Język",
  logInToApp: "Zaloguj się do aplikacji",
};

export const footer: Record<Locale, FooterCopy> = { en, pl };
