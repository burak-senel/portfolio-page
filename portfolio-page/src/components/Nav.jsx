import React from "react";
import { useLanguage } from "../context/languageContext";

function Nav() {
  const { getTexts } = useLanguage();
  const texts = getTexts();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="navSection">
      <div className="circle">
        <p>B</p>
      </div>
      <nav className="navbar">
        <a href="#" onClick={() => scrollToSection("skills")}>
          {texts.skills}
        </a>
        <a href="#" onClick={() => scrollToSection("projects")}>
          {texts.projects}
        </a>
        <a href="mailto:buurak.senel@gmail.com">
          <button className=" text-[#3730A3] border-[#3730A3] border rounded-md px-5 py-2">
            {texts.hireMe}
          </button>
        </a>
      </nav>
    </section>
  );
}

export default Nav;
