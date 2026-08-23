import type { Locale } from "../locale";

const en = {
  eyebrow: "Analytics",
  heading: "Know the margin, not just the revenue.",
  lead: "Every order carries its real AliExpress cost, so margin, markup and average margin per order are known figures rather than estimates.",

  tabsLabel: "Analytics views",
  tabFinance: "Finance",
  tabProducts: "Products",
  tabCustomers: "Customers",

  financeTitle: "Finance",
  financeScope: "all stores · last 30 days",
  revenue: "Revenue",
  margin: "Margin",
  aliexpressCost: "AliExpress cost",
  markup: "Markup",
  avgMarginPerOrder: "Avg margin / order",
  supplierCost: "Supplier cost",
  marginPerStore: "Margin per store",

  productSales: "Product sales",
  topByMargin: "top by margin",
  profitConcentration: "Profit concentration",
  profitConcentrationBody: "of products generate 80% of the profit. DropFlow tells you which ones.",
  needsCorrection: "Needs correction",
  mappings: "mappings",
  needsCorrectionBody: "Price or variant drift at the supplier, flagged before it eats the margin.",

  customerSegments: "Customer segments",
  repeatBuyers: "Repeat buyers",
  oneTimeBuyers: "One-time buyers",
  highValue: "High value",

  fulfilmentTime: "Fulfilment time",
  fulfilmentTimeUnit: "days average, order to delivery",
  stuckOrders: "orders stuck without tracking",
  repeatRate: "of customers order again",
};

type AnalyticsCopy = typeof en;

const pl: AnalyticsCopy = {
  eyebrow: "Analityka",
  heading: "Znaj marżę, nie tylko przychód.",
  lead: "Każde zamówienie nosi swój realny koszt z AliExpress, więc marża, narzut i średnia marża na zamówieniu to znane liczby, a nie szacunki.",

  tabsLabel: "Widoki analityki",
  tabFinance: "Finanse",
  tabProducts: "Produkty",
  tabCustomers: "Klienci",

  financeTitle: "Finanse",
  financeScope: "wszystkie sklepy · ostatnie 30 dni",
  revenue: "Przychód",
  margin: "Marża",
  aliexpressCost: "Koszt AliExpress",
  markup: "Narzut",
  avgMarginPerOrder: "Śr. marża / zam.",
  supplierCost: "Koszt dostawcy",
  marginPerStore: "Marża na sklep",

  productSales: "Sprzedaż produktów",
  topByMargin: "wg marży",
  profitConcentration: "Koncentracja zysku",
  profitConcentrationBody: "produktów daje 80% zysku. DropFlow mówi które.",
  needsCorrection: "Do korekty",
  mappings: "mapowań",
  needsCorrectionBody: "Zmiana ceny lub wariantu u dostawcy, zgłoszona zanim zje marżę.",

  customerSegments: "Segmenty klientów",
  repeatBuyers: "Powracający",
  oneTimeBuyers: "Jednorazowi",
  highValue: "Wysoka wartość",

  fulfilmentTime: "Czas realizacji",
  fulfilmentTimeUnit: "dni średnio, od zamówienia do dostawy",
  stuckOrders: "zamówień bez numeru śledzenia",
  repeatRate: "klientów zamawia ponownie",
};

export const analytics: Record<Locale, AnalyticsCopy> = { en, pl };
