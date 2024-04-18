import React from "react";
import { useLanguage } from "../context/languageContext";

function Profile() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="profileSection">
      <h2 className="dark:text-[#AEBCCF]">{texts.profile}</h2>
      <div className="profileContainer lg:flex-row sm:flex-col">
        <div className="profile">
          <h3 className="dark:text-[#B7AAFF]">{texts.profile}</h3>
          <div className="flex flex-col justify-between">
            <div className="flex flex-row gap-x-4   dark:text-white">
              <p className="my-4 w-[150px] font-bold">{texts.birthdate}</p>
              <p className="my-4 w-[200px] lg:w-[250px]">
                {texts.birthdateinfo}
              </p>
            </div>
            <div className="flex flex-row gap-x-4   dark:text-white">
              <p className="my-4 w-[150px] font-bold">{texts.location}</p>
              <p className="my-4 w-[200px] lg:w-[250px]">
                {texts.locationinfo}
              </p>
            </div>
            <div className="flex flex-row gap-x-4   dark:text-white">
              <p className="my-4 w-[150px] font-bold">{texts.education}</p>
              <p className="my-4 w-[200px] lg:w-[250px]">
                {texts.educationinfo}
              </p>
            </div>
            <div className="flex flex-row gap-x-4   dark:text-white">
              <p className="my-4 w-[150px] font-bold">{texts.preferredrole}</p>
              <p className="my-4 w-[200px] lg:w-[250px]">
                {texts.preferredroleinfo}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-lg pb-8 lg:pb-16">
          <h3 className="dark:text-[#B7AAFF]">{texts.aboutme}</h3>
          <div className="aboutmeText">
            <p className="text-[#6B7280] font-light leading-7 dark:text-white">
              {texts.aboutmeinfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
