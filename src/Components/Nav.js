import React from "react";
import "./Nav.css";
import HamburgerDrawer from "./Drawer";

function Nav({ setCategory }) {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        src="logo1.jpg"
        alt="logo"
        height="80%"
        style={{ cursor: "pointer" }}
      ></img>
    </div>
  );
}

export default Nav;
