import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "0 5px 0 5px",
        }}
        className="footer"
      >
        <span style={{ color: "white" }}>All rights Reserved @ComixGrid</span>

        <div className="footer-menu ">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Privacy & Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
