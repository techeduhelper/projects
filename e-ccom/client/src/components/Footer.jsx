import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(251,157,63,1) 0%, rgba(82,67,165,1) 54%, rgba(110,252,70,0.9949229691876751) 100%)",
          marginTop: "auto",
          padding: "0 5px 0 5px",
        }}
        className="footer"
      >
        <span style={{ color: "black" }}>All rights Reserved @ComixGrid</span>

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
