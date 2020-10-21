import React from "react";
import { skills } from "../../../config/body.json";
// import "./Skill.css";
import "./Skill.prod.css";

function Skill() {
  const renderSkills = () => {
    return skills.map((skill) => {
      return (
        <div className="skills__item" key={skill.id}>
          <i className={skill.icon_class}></i>
          <span className="skills__item-description" id={skill.name}>
            {skill.name}
          </span>
        </div>
      );
    });
  };
  return (
    <div className="skills__container">
      <div className="skill__heading">
        <h1 className="skills__heading">SKILLS</h1>
      </div>
      <div className="skills__items">{renderSkills()}</div>
    </div>
  );
}

export default Skill;
