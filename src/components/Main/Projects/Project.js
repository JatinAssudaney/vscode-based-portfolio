import React from "react";
import "./Project.css";

function Project({
  projectName,
  projectLogo,
  projectTech,
  projectDesc,
  projectView,
}) {
  console.log(projectView);
  const renderTechnology = () => {
    return projectTech.map((tech, index) => {
      return (
        <p className="project__technology" key={index}>
          {tech}
        </p>
      );
    });
  };

  return (
    <div className="project__container">
      <div className="project__header">
        <img className="project__logo" src={projectLogo} alt={projectName} />
        <h1 className="project__title">{projectName}</h1>
      </div>
      <div className="project__description">{projectDesc}</div>
      <div className="project__technologies_container">
        {renderTechnology()}
      </div>
      <div className="project__view">
        <img
          className="project__icon"
          src={projectView.icon_src}
          alt={projectView.name}
        />
        <a className="project__link" href={projectView.link}>
          View on {projectView.name}
        </a>
      </div>
    </div>
  );
}

export default Project;
