export type Locale = "en" | "pl";

const translations = {
  en: {
    nav: {
      goToApp: "Go to App",
    },
    hero: {
      badge: "Shoper × AliExpress Automation",
      titleLine1: "Automate Your",
      titleLine2: "Dropshipping Workflow",
      subtitle:
        "Connect your Shoper store with AliExpress. Sync orders automatically, eliminate errors, and track profits — all from one dashboard.",
      cta: "Get Started",
    },
    features: {
      heading: "Everything you need to scale",
      subheading:
        "DropFlow handles the tedious parts of dropshipping so you can focus on growing your business.",
      comingSoon: "Coming Soon",
      orderAutomation: {
        title: "Order Automation",
        description:
          "Automatically sync customer and order data from Shoper to AliExpress. No more copy-paste — reduce errors and speed up fulfillment.",
      },
      profitAnalytics: {
        title: "Profit Analytics",
        description:
          "Track revenue, margins, and product performance in real time. Match Shoper orders with AliExpress costs to see true profitability.",
      },
      smartExport: {
        title: "Smart Export",
        description:
          "Export fully matched order data with calculated margins. Perfect for accounting, financial reconciliation, or custom analysis in Excel.",
      },
      shopifyIntegration: {
        title: "Shopify Integration",
        description:
          "Shopify support is on the way. Soon you'll be able to connect your Shopify store alongside Shoper for a unified dropshipping workflow.",
      },
    },
    howItWorks: {
      heading: "How it works",
      subheading: "Get started in minutes — no technical setup required.",
      connect: { label: "Connect", description: "Link your Shoper store in minutes" },
      sync: { label: "Sync", description: "Orders push to AliExpress automatically" },
      track: { label: "Track", description: "Monitor everything from one dashboard" },
    },
    footer: {
      goToApp: "Go to App",
      builtBy: "Built by",
    },
  },
  pl: {
    nav: {
      goToApp: "Przejdź do aplikacji",
    },
    hero: {
      badge: "Automatyzacja Shoper × AliExpress",
      titleLine1: "Zautomatyzuj Swój",
      titleLine2: "Workflow Dropshippingowy",
      subtitle:
        "Połącz swój sklep Shoper z AliExpress. Synchronizuj zamówienia automatycznie, eliminuj błędy i śledź zyski — wszystko w jednym miejscu.",
      cta: "Rozpocznij",
    },
    features: {
      heading: "Wszystko, czego potrzebujesz do skalowania",
      subheading:
        "DropFlow zajmuje się żmudnymi aspektami dropshippingu, abyś mógł skupić się na rozwijaniu biznesu.",
      comingSoon: "Wkrótce",
      orderAutomation: {
        title: "Automatyzacja zamówień",
        description:
          "Automatycznie synchronizuj dane klientów i zamówień z Shoper do AliExpress. Koniec z kopiowaniem, mniej błędów i szybsza realizacja.",
      },
      profitAnalytics: {
        title: "Analityka zysków",
        description:
          "Śledź przychody, marże i wyniki produktów w czasie rzeczywistym. Porównuj zamówienia Shoper z kosztami AliExpress, aby zobaczyć prawdziwą rentowność.",
      },
      smartExport: {
        title: "Inteligentny eksport",
        description:
          "Eksportuj w pełni dopasowane dane zamówień z obliczonymi marżami. Idealne do księgowości, rozliczeń finansowych lub analizy w Excelu.",
      },
      shopifyIntegration: {
        title: "Integracja z Shopify",
        description:
          "Wsparcie Shopify jest w drodze. Wkrótce będziesz mógł połączyć swój sklep Shopify obok Shoper w ramach jednego workflow dropshippingowego.",
      },
    },
    howItWorks: {
      heading: "Jak to działa",
      subheading: "Zacznij w kilka minut — bez konfiguracji technicznej.",
      connect: { label: "Połącz", description: "Podłącz swój sklep Shoper w kilka minut" },
      sync: { label: "Synchronizuj", description: "Zamówienia trafiają na AliExpress automatycznie" },
      track: { label: "Śledź", description: "Monitoruj wszystko z jednego panelu" },
    },
    footer: {
      goToApp: "Przejdź do aplikacji",
      builtBy: "Stworzone przez",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export function detectLocale(): Locale {
  const lang = navigator.language || (navigator as any).userLanguage || "en";
  return lang.startsWith("pl") ? "pl" : "en";
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
