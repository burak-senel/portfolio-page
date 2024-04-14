import React from "react";
import { images } from "../../images";
import BannerLogo from "./BannerLogo";
import { useLanguage } from "../context/languageContext";
function Skills() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="skillsSection">
      <div>
        <h2>{texts.skills}</h2>
        <BannerLogo images={images} speed={15000} />
      </div>
    </section>
  );
}

export default Skills;
