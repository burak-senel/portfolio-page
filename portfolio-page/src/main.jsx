import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageProvider } from "./context/languageContext.jsx";
import { ModeProvider } from "./context/darkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
