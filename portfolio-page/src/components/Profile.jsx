import React from "react";
import { useLanguage } from "../context/languageContext";

function Profile() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="profileSection">
      <h2>{texts.profile}</h2>
      <div className="profileContainer">
        <div className="profile">
          <h3>{texts.profile}</h3>
          <div className="profileInfos">
            <div className="profileLeft">
              <p>{texts.birthdate}</p>
              <p>{texts.location}</p>
              <p>{texts.education}</p>
              <p>{texts.preferredrole}</p>
            </div>
            <div className="profileRight">
              <p>{texts.birthdateinfo}</p>
              <p>{texts.locationinfo}</p>
              <p>{texts.educationinfo}</p>
              <p>{texts.preferredroleinfo}</p>
            </div>
          </div>
        </div>
        <div className="aboutme">
          <h3>{texts.aboutme}</h3>
          <div className="aboutmeText">
            <p className="text-[#6B7280] font-light leading-7">
              {texts.aboutmeinfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
