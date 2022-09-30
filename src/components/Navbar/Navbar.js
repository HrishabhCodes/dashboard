import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="profile-container">
        <img
          className="profile-image"
          src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg"
          alt="profile"
        />
        <p className="greeting">Hi, John</p>
      </div>
      <div className="search-container">
        <i class="notifications fa-solid fa-bell"></i>
        <input type="text" placeholder="Search" className="search" />
      </div>
    </div>
  );
};

export default Navbar;
