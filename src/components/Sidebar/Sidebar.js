import React from "react";
import Logo from "../../assets/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo-image" src={Logo} alt="" />
      <div className="items">
        <i
          title="Dashboard"
          className="active dashboard fa-solid fa-chart-column"
        ></i>
        <i title="Notes" className="notes fa-regular fa-note-sticky"></i>
        <i title="Code" className="code fa-regular fa-file-code"></i>
      </div>
      <i title="Settings" className="settings fa-solid fa-sliders"></i>
    </div>
  );
};

export default Sidebar;
