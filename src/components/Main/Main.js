import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import "./Main.css";
import "./Main.prod.css";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Skill from "./Skills/Skill";
import Education from "./Education/Education";

function Main() {
  const channelId = useSelector((state) => state.channelId);
  const channelName = useSelector((state) => state.channelName);
  console.log(channelId, channelName);
  return (
    <div className="main">
      {channelId === 1 ? (
        <Projects />
      ) : (
        <Fragment>
          <About />
          <Skill />
          <Education />
        </Fragment>
      )}
    </div>
  );
}

export default Main;
