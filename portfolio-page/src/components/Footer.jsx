import React from "react";
import { useLanguage } from "../context/languageContext";

function Footer() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="flex flex-col footerSection">
      <h4>{texts.footer}</h4>
      <div className="flex place-content-between">
        <p>👉buurak.senel@gmail.com</p>
        <div>
          <a>{texts.personalblog}</a>
          <a>Github</a>
          <a>Linkedin</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
