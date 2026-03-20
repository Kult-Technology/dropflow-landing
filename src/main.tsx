import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { detectLocale } from "./i18n/translations";

// Set html lang attribute based on detected locale
document.documentElement.lang = detectLocale();

createRoot(document.getElementById("root")!).render(<App />);
