import React from "react";
import { useLanguage } from "../context/languageContext";

function Project({ data }) {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <div className="card">
      <div className="imgContainer">
        <img className="cardImage" src={data.image} alt={data.title} />
      </div>
      <h3 className="dark:text-[#CFCBFF]">{data.title}</h3>
      <p className="mb-4 dark:text-white">{texts.project1}</p>
      <div className="flex gap-1.5 mb-4">
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4 dark:border-[#8F88FF] dark:text-[#8F88FF]">
          {data.usetech}
        </li>
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4 dark:border-[#8F88FF] dark:text-[#8F88FF]">
          {data.usetech2}
        </li>
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4 dark:border-[#8F88FF] dark:text-[#8F88FF]">
          {data.usetech3}
        </li>
      </div>
      <div className="flex place-content-between sm:justify-start sm:gap-8">
        <a
          href={data.projectgithublink}
          target="_blank"
          className="text-[#3730A3] underline dark:text-[#E1E1FF]"
        >
          Github
        </a>
        <a
          href={data.projectsitelink}
          target="_blank"
          className="text-[#3730A3] underline dark:text-[#E1E1FF]"
        >
          {texts.viewsite}
        </a>
      </div>
    </div>
  );
}

export default Project;
