import React, { createContext, useState, useContext, useEffect } from "react";
import { texts } from "../../../texts";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const detectBrowserLanguage = () => {
    const userLanguage = navigator.language || navigator.userLanguage;
    return userLanguage.startsWith("tr") ? "turkish" : "english";
  };

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || detectBrowserLanguage()
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "turkish" ? "english" : "turkish");
  };

  const getTexts = () => {
    return texts[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getTexts }}>
      {children}
    </LanguageContext.Provider>
  );
};
