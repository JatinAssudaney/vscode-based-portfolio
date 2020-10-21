import React from "react";
import { header_heading } from "../../config/body.json";
// import "./Header.css";
import "./Header.prod.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icons--red"> </div>
        <div className="header__icons--yellow"></div>
        <div className="header__icons--green"></div>
      </div>
      <div className="header__heading">{header_heading}</div>
    </div>
  );
}

export default Header;
