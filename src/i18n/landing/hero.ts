import type { Locale } from "../locale";

const en = {
  badge: "Shoper and Shopify, one account",
  heading: "Every order fulfilled before you open the tab.",
  lead: "DropFlow connects your Shoper and Shopify stores to AliExpress. Orders go out on their own, tracking and status come back on their own, and margins stay visible the whole way through.",
  bookDemo: "Book a demo",
  logIn: "Log in to the app",

  /* Stats card */
  lastThirtyDays: "last 30 days",
  paidOrders: "Paid orders",
  fulfilment: "Fulfilment",
  margin: "Margin",
  trackingSynced: "Tracking synced back",

  /* Pipeline panel */
  pipelineLabel: "Order pipeline, both directions",
  yourStores: "Your stores",
  dropflowSteps: "clean · match · place · sync",
  orderedAndTracked: "ordered and tracked",

  /* Rails - the second rail shortens its outbound label in the vertical layout */
  railOrders: "orders",
  railTracking: "tracking",
  railOrderPlaced: "order placed",
  railOrderPlacedShort: "order placed",
  railStatusCost: "status + cost",

  /* KPI strip */
  ordersInFlight: "Orders in flight",
  fulfilmentRate: "Fulfilment rate",
  needsAttention: "Needs attention",

  /* Marquee - each item is a bold run plus the sentence that follows it */
  marqueeClickStrong: "1 click",
  marqueeClickRest: "per order, not fifteen fields",
  marqueePlatformsStrong: "2 platforms",
  marqueePlatformsRest: ", one view: Shoper and Shopify",
  marqueeWorldwideStrong: "Worldwide",
  marqueeWorldwideRest: "markets and address formats",
  marqueeRealtimeStrong: "Real-time",
  marqueeRealtimeRest: "status sync from AliExpress",
};

type HeroCopy = typeof en;

const pl: HeroCopy = {
  badge: "Shoper i Shopify, jedno konto",
  heading: "Każde zamówienie zrealizowane, zanim otworzysz kartę.",
  lead: "DropFlow łączy Twoje sklepy Shoper i Shopify z AliExpress. Zamówienia wychodzą same, numery śledzenia i statusy wracają same, a marże są widoczne na każdym etapie.",
  bookDemo: "Umów demo",
  logIn: "Zaloguj się do aplikacji",

  lastThirtyDays: "ostatnie 30 dni",
  paidOrders: "Opłacone zamówienia",
  fulfilment: "Realizacja",
  margin: "Marża",
  trackingSynced: "Śledzenie wróciło do sklepu",

  pipelineLabel: "Przepływ zamówień w obie strony",
  yourStores: "Twoje sklepy",
  dropflowSteps: "czyść · dopasuj · zamów · synchronizuj",
  orderedAndTracked: "zamówione i śledzone",

  railOrders: "zamówienia",
  railTracking: "śledzenie",
  railOrderPlaced: "zamówienie złożone",
  railOrderPlacedShort: "zamówienie",
  railStatusCost: "status i koszt",

  ordersInFlight: "Zamówienia w drodze",
  fulfilmentRate: "Realizacja",
  needsAttention: "Wymaga uwagi",

  marqueeClickStrong: "1 klik",
  marqueeClickRest: "na zamówienie, nie piętnaście pól",
  marqueePlatformsStrong: "2 platformy",
  marqueePlatformsRest: ", jeden widok: Shoper i Shopify",
  marqueeWorldwideStrong: "Cały świat",
  marqueeWorldwideRest: "- rynki i formaty adresów",
  marqueeRealtimeStrong: "Na bieżąco",
  marqueeRealtimeRest: "- statusy z AliExpress",
};

export const hero: Record<Locale, HeroCopy> = { en, pl };
