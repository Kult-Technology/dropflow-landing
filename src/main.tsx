import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// <html lang> is kept in sync with the active locale by <LanguageProvider>.
createRoot(document.getElementById("root")!).render(<App />);
