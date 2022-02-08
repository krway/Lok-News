import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <span className="name">
          Copyright & copy ©{" "}
          <a href="https://www.github.com/krway">News Express</a>
        </span>
        <hr style={{ width: "85vw" }}></hr>
        <div className="iconcnt">
          <a href="https://www.github.com/krway" target="__blank">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-pradhan-149a96185/"
            target="__blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="__blank">
            <i className="fas fa-link fa-2x"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
