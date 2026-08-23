import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { LOCALE_PATHS } from "@/i18n/locale";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

/*
 * The provider sits inside the router because it derives the active language
 * from the path. Both locale routes render the same element type, so switching
 * language reconciles in place rather than remounting the page.
 */
const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        <Route path={LOCALE_PATHS.en} element={<Index />} />
        <Route path={LOCALE_PATHS.pl} element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
