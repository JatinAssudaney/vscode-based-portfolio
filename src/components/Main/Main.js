import React from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import Projects from "./Projects/Projects";
import About from "./About/About";

function Main() {
  const channelId = useSelector((state) => state.channelId);
  const channelName = useSelector((state) => state.channelName);
  console.log(channelId, channelName);
  return (
    <div className="main">{channelId === 1 ? <Projects /> : <About />}</div>
  );
}

export default Main;
