import type { Locale } from "../locale";

const en = {
  oneClick: "click to place an order at the supplier",
  zeroFields: "address fields retyped by hand",
  twoPlatforms: "store platforms from a single account",
  alwaysOn: "status and tracking sync, worldwide markets",
};

type NumbersCopy = typeof en;

const pl: NumbersCopy = {
  oneClick: "klik, aby złożyć zamówienie u dostawcy",
  zeroFields: "pól adresowych przepisywanych ręcznie",
  twoPlatforms: "platformy sklepowe z jednego konta",
  alwaysOn: "synchronizacja statusów i śledzenia, rynki na całym świecie",
};

export const numbers: Record<Locale, NumbersCopy> = { en, pl };
