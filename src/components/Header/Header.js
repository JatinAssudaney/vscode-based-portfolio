import React from "react";
import body from "../../config/body.json";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icons--red"> </div>
        <div className="header__icons--yellow"></div>
        <div className="header__icons--green"></div>
      </div>
      <div className="header__heading">{body.header__heading}</div>
    </div>
  );
}

export default Header;
