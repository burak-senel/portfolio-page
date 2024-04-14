import React from "react";
import { useLanguage } from "../context/languageContext";

function Profile() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="profileSection">
      <h2>{texts.profile}</h2>
    </section>
  );
}

export default Profile;
