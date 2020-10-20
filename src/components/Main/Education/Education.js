import React from "react";
import "./Education.css";
import { education } from "../../../config/body.json";

function Education() {
  const renderEducation = () => {
    return education.map((item) => {
      const { id, degree, institute, marks, timeline } = item;
      return (
        <div key={id} className="education__item">
          <div className="education__header">
            <h1 className="education__title">{degree}</h1>
            <h3 className="education__institute">{institute}</h3>
          </div>
          <div className="education__details">
            <div className="education__timeline">
              <img
                className="education__details--icons"
                src="https://www.flaticon.com/svg/static/icons/svg/1827/1827364.svg"
                alt="calendar"
              />
              <div className="education__date">{timeline}</div>
            </div>
            <div className="education__result">
              <img
                className="education__details--icons"
                src="https://www.flaticon.com/svg/static/icons/svg/590/590510.svg"
                alt="marks"
              />
              <div className="education__marks">{marks}</div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="education__container">
      <h1>EDUCATION</h1>
      <div className="education__items">{renderEducation()}</div>
    </div>
  );
}

export default Education;
