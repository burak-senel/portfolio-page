import React from "react";
import { useLanguage } from "../context/languageContext";
import { projectData } from "../data/projectData";
import Project from "./Project";
function Projects() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section id="projects" className="projectsSection">
      <h2 className="dark:text-[#AEBCCF]">{texts.projects}</h2>
      <div className="flex justify-between lg:flex-row sm:flex-col">
        {projectData.map((cardData, index) => (
          <Project key={index} data={cardData} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
