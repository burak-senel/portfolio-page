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
      <h3 className="">{data.title}</h3>
      <p className="mb-4">{texts.project1}</p>
      <div className="flex gap-1.5 mb-4">
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4">
          {data.usetech}
        </li>
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4">
          {data.usetech2}
        </li>
        <li className="list-none border rounded-md text-[#3730A3] border-[#3730A3] py-0.2 px-4">
          {data.usetech3}
        </li>
      </div>
      <div className="flex place-content-between">
        <a
          href={data.projectgithublink}
          target="_blank"
          className="text-[#3730A3] underline"
        >
          Github
        </a>
        <a
          href={data.projectsitelink}
          target="_blank"
          className="text-[#3730A3] underline"
        >
          View Site
        </a>
      </div>
    </div>
  );
}

export default Project;
