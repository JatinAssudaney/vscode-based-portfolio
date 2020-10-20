import React from "react";
import Project from "./Project";
import "./Projects.css";
import { projects } from "../../../config/body.json";

function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => {
        const {
          id,
          name,
          logo,
          technology_stack,
          description,
          project_view,
        } = project;
        return (
          <Project
            key={id}
            projectName={name}
            projectLogo={logo}
            projectTech={technology_stack}
            projectDesc={description}
            projectView={project_view}
          />
        );
      })}
    </div>
  );
}

export default Projects;
