import React from "react";

function Project({ data }) {
  return (
    <div className="card">
      <img className="cardImage" src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="flex">
        <li>{data.usetech}</li>
        <li>{data.usetech2}</li>
        <li>{data.usetech3}</li>
      </div>
      <div className="flex place-content-between">
        <a href={data.projectgithublink}>Github</a>
        <a href={data.projectsitelink}>View Site</a>
      </div>
    </div>
  );
}

export default Project;
