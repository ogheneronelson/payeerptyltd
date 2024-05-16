import React from "react";
import LogoImage from "../../images/payline-logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const logo = () => {
  return (
    <div className="logo-cont">
      <Link className="logo-link" to="/admin/dashboard">
        <img className="logo-image" src={LogoImage} alt="company logo" />
        <div className="text-cont">
          <p className="logo-text">Payeer</p>
          <p className="logo-text-1">Pty Limited</p>
        </div>
      </Link>
    </div>
  );
};

export default logo;
