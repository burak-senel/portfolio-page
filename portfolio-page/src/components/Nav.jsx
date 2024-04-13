import React from "react";
import { useLanguage } from "../context/languageContext";

function Nav() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="navSection">
      <div className="circle">
        <p>B</p>
      </div>
      <nav className="navbar">
        <p>{texts.skills}</p>
        <p>{texts.projects}</p>
        <p className="hireMe">{texts.hireMe}</p>
      </nav>
    </section>
  );
}

export default Nav;
