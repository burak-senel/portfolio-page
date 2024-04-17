import React from "react";
import { useLanguage } from "../context/languageContext";
import { projectData } from "../data/projectData";
import Project from "./Project";
function Projects() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="projectsSection">
      <h2>{texts.projects}</h2>
      <div className="flex justify-between flex-wrap">
        {projectData.map((cardData, index) => (
          <Project key={index} data={cardData} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
