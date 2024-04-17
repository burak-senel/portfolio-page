import React, { useContext, useEffect } from "react";
import { useLanguage } from "../context/languageContext";
import { darkModeContext } from "../context/darkModeContext";

function Mode() {
  const { toggleLanguage, getTexts } = useLanguage();
  const texts = getTexts();
  const { isDarkMode, toggleDarkMode } = useContext(darkModeContext);

  useEffect(() => {
    // Dark mode durumu değiştiğinde, bu durumu local storage'a kaydet
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    /*axios
      .post('https://reqres.in/api/pizza', { isDarkMode })
      .then((response) => {
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        console.error('API Request Error:', error);
      });*/
  }, [isDarkMode]);
  return (
    <div className="flex flex-row justify-end pt-4 pb-4 w-[80%] m-auto">
      <div></div>
      <div className="flex flex-row gap-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            defaultChecked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-customPurple"></div>
          <span className="ms-3 text-sm font-medium text-[#777777] dark:text-[#D9D9D9] ">
            {isDarkMode ? `${texts.lightTheme}` : `${texts.darkTheme}`}
          </span>
        </label>
        <span>|</span>
        <button
          onClick={toggleLanguage}
          className="text-sm font-semibold text-[#4731D3] dark:text-[#BAB2E7]"
        >
          {texts.languageButton}
        </button>
      </div>
    </div>
  );
}
/* {darkMode ? `${texts.lightTheme}` : `${texts.darkTheme}`}
 */
export default Mode;
