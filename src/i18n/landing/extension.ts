import type { Locale } from "../locale";

const en = {
  badge: "Browser extension",
  heading: "Parcel locker details, filled for you.",
  lead: "For the orders that still need a manual checkout, the DropFlow extension takes the order id and fills the shipping form on the AliExpress order page. Data is processed locally in your browser.",
  featureFill: "Address filled from the order id in one click",
  featureLocal: "Processed locally, no third-party servers",
  featureLanguages: "Works with AliExpress in English and local languages",
  mockOrderId: "Order id",
  mockFill: "Fill",
  fieldRecipient: "Recipient",
  fieldLocker: "Parcel locker",
  fieldPhone: "Phone",
  fieldCity: "City / postcode",
  mockValidated: "4 fields filled and validated",
};

type ExtensionCopy = typeof en;

const pl: ExtensionCopy = {
  badge: "Wtyczka",
  heading: "Dane paczkomatu wypełnione za Ciebie.",
  lead: "Dla zamówień, które wymagają ręcznego przejścia przez koszyk, wtyczka DropFlow bierze numer zamówienia i wypełnia formularz wysyłki na stronie zamówienia AliExpress. Dane przetwarzane są lokalnie w przeglądarce.",
  featureFill: "Adres wypełniony z numeru zamówienia jednym klikiem",
  featureLocal: "Przetwarzane lokalnie, bez zewnętrznych serwerów",
  featureLanguages: "Działa na AliExpress po angielsku i w językach lokalnych",
  mockOrderId: "Numer zamówienia",
  mockFill: "Wypełnij",
  fieldRecipient: "Odbiorca",
  fieldLocker: "Paczkomat",
  fieldPhone: "Telefon",
  fieldCity: "Miasto / kod",
  mockValidated: "4 pola wypełnione i sprawdzone",
};

export const extension: Record<Locale, ExtensionCopy> = { en, pl };
