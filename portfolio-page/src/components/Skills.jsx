import React from "react";
import { images } from "../data/images";
import BannerLogo from "./BannerLogo";
import { useLanguage } from "../context/languageContext";
function Skills() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section id="skills" className="skillsSection">
      <div>
        <h2 className="dark:text-[#AEBCCF]">{texts.skills}</h2>
        <BannerLogo images={images} speed={15000} />
      </div>
    </section>
  );
}

export default Skills;
