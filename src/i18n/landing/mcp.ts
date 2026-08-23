import type { Locale } from "../locale";

const en = {
  heading: "Ask your store data a question.",
  lead: "Connect DropFlow to Claude and analyse sales, margins, customers, supplier spend and fulfilment in plain language. Your DropFlow login, your role, your data scope. No API keys, no client IDs.",
  step1: "Add the DropFlow connector in Claude",
  step2: "Log in with your DropFlow account",
  step3: "Ask in English or Polish",
  chatQuestion: "Which products carried the best margin last month, and where is my supplier spend going?",
  chatAnswerIntro: "Top margin last month, all stores:",
  chatAnswerSummary: "Supplier spend was 122 936 zł, 67,2% of revenue. Two stores drive 71% of it.",
};

type McpCopy = typeof en;

const pl: McpCopy = {
  heading: "Zapytaj dane swoich sklepów.",
  lead: "Podłącz DropFlow do Claude i analizuj sprzedaż, marże, klientów, wydatki u dostawcy i realizację w naturalnym języku. Twój login DropFlow, Twoja rola, Twój zakres danych. Bez kluczy API i identyfikatorów klienta.",
  step1: "Dodaj konektor DropFlow w Claude",
  step2: "Zaloguj się kontem DropFlow",
  step3: "Pytaj po polsku albo angielsku",
  chatQuestion: "Które produkty miały najlepszą marżę w ostatnim miesiącu i gdzie idą moje wydatki u dostawcy?",
  chatAnswerIntro: "Najlepsza marża w ostatnim miesiącu, wszystkie sklepy:",
  chatAnswerSummary: "Wydatki u dostawcy to 122 936 zł, 67,2% przychodu. Dwa sklepy odpowiadają za 71%.",
};

export const mcp: Record<Locale, McpCopy> = { en, pl };
