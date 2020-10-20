import React from "react";
import "./Sidebar.css";
import { user_info, profiles } from "../../config/body.json";

function Sidebar() {
  const renderUserDetails = () => {
    return user_info.map((user) => {
      return (
        <div key={user.id} className="sidebar__user">
          <img
            className="sidebar__user--icons"
            src={user.icon}
            alt={user.title}
          />
          <span className="sidebar__user-icons-description" id={user.title}>
            {user.title}
          </span>
        </div>
      );
    });
  };
  const renderProfiles = () => {
    return profiles.map((profile) => {
      return (
        <a key={profile.id} href={profile.link}>
          <img
            className="sidebar__profiles--icons"
            src={profile.icon_src}
            alt={profile.website}
          />
        </a>
      );
    });
  };
  return (
    <div className="sidebar">
      <div className="sidebar__info">{renderUserDetails()}</div>
      <div className="sidebar__profiles">{renderProfiles()}</div>
    </div>
  );
}

export default Sidebar;
