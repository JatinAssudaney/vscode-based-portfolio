import React from "react";
import "./About.css";
// import "./About.prod.css";
import { about_me } from "../../../config/body.json";

function About() {
  const { name, image, sub_heading, resume_link, descriptions } = about_me;
  const renderDescription = () => {
    return descriptions.map((description) => {
      return (
        <div key={description.id} className="about__description">
          {description.item}
        </div>
      );
    });
  };
  return (
    <div className="about__container">
      <div className="about__header">
        <div className="about__avatar">
          <div className="about__avatar--border">
            <img className="about__image" src={image} alt={name} />
          </div>
        </div>
        <div className="about__content">
          <span className="about__welcome">Hello I'm</span>
          <div className="about__heading">{name}</div>
          <div className="about__subHeading">{sub_heading}</div>
          <div className="about__resume">
            <img
              className="about__icon"
              src="https://www.flaticon.com/svg/static/icons/svg/633/633817.svg"
              alt="Resume"
            />
            <a
              rel="noopener noreferrer"
              className="about__resume-link"
              href={resume_link}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="about__description-container">{renderDescription()}</div>
    </div>
  );
}

export default About;
