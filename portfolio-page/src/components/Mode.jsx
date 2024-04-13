import React, { useState } from "react";
import { useLanguage } from "../context/languageContext";

function Mode() {
  const { toggleLanguage, getTexts } = useLanguage();
  const texts = getTexts();
  const [darkMode, setDarkMode] = useState(false);

  // Karanlık modu açma/kapatma işlevi
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <section className="modeSection text-sm font-medium text-[#6B7280]">
      <div>
        <label className="inline-flex items-center cursor-pointer  ">
          <input
            type="checkbox"
            value=""
            className=" peer"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-2">
            {darkMode ? `${texts.lightTheme}` : `${texts.darkTheme}`}
          </span>
        </label>
      </div>
      <p className=" px-5 ">|</p>
      <button onClick={toggleLanguage}>{texts.languageButton}</button>
    </section>
  );
}

export default Mode;
