import React from "react";
import LogoImage from "../../images/payline-logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const logo = () => {
  return (
    <div className="logo-cont">
      <Link className="logo-link" to="/dashboard">
        <img className="logo-image" src={LogoImage} alt="company logo" />
      </Link>
    </div>
  );
};

export default logo;
