import type { Locale } from "../locale";

const en = {
  eyebrow: "Integrations",
  heading: "Two store platforms, one supplier, one account.",

  platformsEyebrow: "Store platforms",
  platformsHeading: "Shoper and Shopify, side by side in one dashboard.",
  platformsBody:
    "Orders, customers, products, categories and variants read from both platforms, with statuses written back to each one.",

  aliBody:
    "Automatic order placement, SKU and attribute lookup, tracking numbers and the real supplier cost of every order.",
  aliAutoOrder: "auto order",
  aliTrackingSync: "tracking sync",
  aliTokenRefresh: "token refresh reminders",

  marketsHeading: "Worldwide markets",
  marketsBody:
    "Address formats, parcel lockers, currencies and shipping methods handled per destination, not per assumption.",

  whyEyebrow: "Why DropFlow",
  whyBody:
    "Nothing else automates AliExpress fulfilment for Shoper. On Shopify, DropFlow places automatic orders more reliably than the alternatives, and it runs both platforms from one account.",
};

type IntegrationsCopy = typeof en;

const pl: IntegrationsCopy = {
  eyebrow: "Integracje",
  heading: "Dwie platformy sklepowe, jeden dostawca, jedno konto.",

  platformsEyebrow: "Platformy sklepowe",
  platformsHeading: "Shoper i Shopify, obok siebie w jednym panelu.",
  platformsBody:
    "Zamówienia, klienci, produkty, kategorie i warianty czytane z obu platform, ze statusami zapisywanymi do każdej z nich.",

  aliBody:
    "Automatyczne składanie zamówień, wyszukiwanie SKU i atrybutów, numery śledzenia i realny koszt dostawcy każdego zamówienia.",
  aliAutoOrder: "auto zamówienie",
  aliTrackingSync: "synchronizacja śledzenia",
  aliTokenRefresh: "przypomnienia o tokenie",

  marketsHeading: "Rynki na całym świecie",
  marketsBody:
    "Formaty adresów, paczkomaty, waluty i metody dostawy obsługiwane per kraj docelowy, nie per założenie.",

  whyEyebrow: "Dlaczego DropFlow",
  whyBody:
    "Nic innego na rynku nie automatyzuje realizacji AliExpress dla Shopera. Na Shopify DropFlow składa zamówienia automatyczne pewniej niż alternatywy, a obie platformy obsługuje z jednego konta.",
};

export const integrations: Record<Locale, IntegrationsCopy> = { en, pl };
