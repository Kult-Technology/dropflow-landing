import type { Locale } from "../locale";

const en = {
  eyebrow: "How it works",
  heading: "Four steps, then it runs without you.",
  lead: "Setup is a one-off. After that the only thing you do is look at the numbers.",

  /** Prefix for the "step 01" pill on each panel - the number stays inline. */
  stepLabel: "step",

  steps: [
    {
      title: "Connect your stores",
      desc: "Shoper and Shopify, as many stores and markets as you run, all under one account.",
    },
    {
      title: "Map products to suppliers",
      desc: "Each product and variant is matched to its AliExpress SKU once. DropFlow tracks what is still unmapped.",
    },
    {
      title: "Orders place themselves",
      desc: "Customer data is cleaned, formatted for the destination market and pushed to AliExpress automatically.",
    },
    {
      title: "Tracking comes back",
      desc: "Tracking numbers, statuses and supplier costs flow back into DropFlow and into your store.",
    },
  ],

  stores: "stores",
  connected: "connected",
  addStore: "Add another store or market",

  storeLinks: "Store links",
  supplierMapping: "Supplier mapping",

  ordersReady: "orders ready to place automatically",
  ordersMeta: "last 2 days · courier shipping",
  place: "Place",
  addressCleaned: "address cleaned and formatted",
  variantResolved: "variant and attributes resolved",
  orderPlaced: "order placed at the supplier",

  trackingReceived: "Tracking number received",
  statusWritten: "Status written back to the store",
  customerNotified: "customer notified automatically",
  costBooked: "Supplier cost booked to the order",
  marginRecalculated: "margin recalculated on the spot",
};

type HowCopy = typeof en;

const pl: HowCopy = {
  eyebrow: "Jak to działa",
  heading: "Cztery kroki i działa bez Ciebie.",
  lead: "Konfiguracja jest jednorazowa. Potem zostaje Ci tylko patrzenie na liczby.",

  stepLabel: "krok",

  steps: [
    {
      title: "Podłącz sklepy",
      desc: "Shoper i Shopify, tyle sklepów i rynków, ile prowadzisz, wszystko na jednym koncie.",
    },
    {
      title: "Powiąż produkty z dostawcą",
      desc: "Każdy produkt i wariant dopasowujesz do SKU w AliExpress raz. DropFlow pilnuje, co zostało do zmapowania.",
    },
    {
      title: "Zamówienia składają się same",
      desc: "Dane klienta są czyszczone, formatowane pod rynek docelowy i wysyłane do AliExpress automatycznie.",
    },
    {
      title: "Śledzenie wraca",
      desc: "Numery śledzenia, statusy i koszty dostawcy wracają do DropFlow i do Twojego sklepu.",
    },
  ],

  stores: "sklepy",
  connected: "połączone",
  addStore: "Dodaj kolejny sklep lub rynek",

  storeLinks: "Powiązania sklepu",
  supplierMapping: "Mapowanie dostawcy",

  ordersReady: "zamówienia gotowe do automatycznego złożenia",
  ordersMeta: "z ostatnich 2 dni · wysyłka kurierska",
  place: "Zamów",
  addressCleaned: "adres wyczyszczony i sformatowany",
  variantResolved: "wariant i atrybuty rozwiązane",
  orderPlaced: "zamówienie złożone u dostawcy",

  trackingReceived: "Numer śledzenia odebrany",
  statusWritten: "Status zapisany w sklepie",
  customerNotified: "klient powiadomiony automatycznie",
  costBooked: "Koszt dostawcy przypisany do zamówienia",
  marginRecalculated: "marża przeliczona od razu",
};

export const how: Record<Locale, HowCopy> = { en, pl };
