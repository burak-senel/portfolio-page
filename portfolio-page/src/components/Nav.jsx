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
      <div className="circle dark:bg-[#4731D3]">
        <p className="dark:text-[#8F88FF]">B</p>
      </div>
      <nav className="navbar">
        <a
          className="dark:text-[#7f8692]"
          href="#"
          onClick={() => scrollToSection("skills")}
        >
          {texts.skills}
        </a>
        <a
          className="dark:text-[#7f8692]"
          href="#"
          onClick={() => scrollToSection("projects")}
        >
          {texts.projects}
        </a>
        <a href="mailto:buurak.senel@gmail.com">
          <button className=" text-[#3730A3] border-[#3730A3] border rounded-md px-5 py-2 dark:bg-white">
            {texts.hireMe}
          </button>
        </a>
      </nav>
    </section>
  );
}

export default Nav;
