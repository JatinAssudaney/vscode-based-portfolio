import React from "react";
import "./Footer.css";
import { email, footer_languages } from "../../config/body.json";
function Footer() {
  const renderLanguages = () => {
    return footer_languages.map((language) => {
      const { id, icon_src, name, icon_width } = language;
      return (
        <span key={id} className="footer__language--highlight">
          <img
            className="footer__icons"
            src={icon_src}
            alt={name}
            style={{ width: icon_width, height: "auto" }}
          />
          {name}
        </span>
      );
    });
  };

  return (
    <div className="footer">
      <div className="footer__language">
        Made with love using {renderLanguages()}
      </div>
      <span className="footer__email">Hire Me -&gt; {email}</span>
    </div>
  );
}

export default Footer;
