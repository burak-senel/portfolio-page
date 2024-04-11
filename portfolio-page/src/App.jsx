import { useLanguage } from "./context/languageContext";

const App = () => {
  const { toggleLanguage, getTexts } = useLanguage();
  const texts = getTexts();

  return (
    <div>
      <button onClick={toggleLanguage}>{texts.buttonText}</button>

      <p>{texts.deneme}</p>
    </div>
  );
};

export default App;
