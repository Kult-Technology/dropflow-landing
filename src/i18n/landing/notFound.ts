import type { Locale } from "../locale";

const en = {
  heading: "This page doesn't exist.",
  lead: "The link may be out of date, or the address slightly off.",
  back: "Back to dropflow.dev",
};

type NotFoundCopy = typeof en;

const pl: NotFoundCopy = {
  heading: "Ta strona nie istnieje.",
  lead: "Link może być nieaktualny albo adres nieco przekręcony.",
  back: "Wróć na dropflow.dev",
};

export const notFound: Record<Locale, NotFoundCopy> = { en, pl };
