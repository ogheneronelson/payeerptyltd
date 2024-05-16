import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import Logo from "../logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleClick = () => {
    setActiveMenu(!activeMenu);
    setClicked(!clicked);
  };

  return (
    <div className="main-navbar">
      <div className="main-navbar-large">
        <div className="main-navbar-1">
          <Logo />
        </div>
        <div className="main-navbar-2">
          <nav>
            <ul>
              <li>
                <NavLink to="/">{i18next.t("thome1")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{i18next.t("thome2")}</NavLink>
              </li>
              <li>
                <button
                  className="dropdown-toggle nav-support"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18next.t("thome3")}
                </button>

                <ul
                  className="dropdown-menu support-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="/contact-us">
                      {i18next.t("thome4")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/marketing-policy">
                      {i18next.t("thome5")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/privacy-policy">
                      {i18next.t("thome6")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/refer-and-earn">{i18next.t("thome7")}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-navbar-3">
          
          <div>
            <NavLink to="/login">{i18next.t("thome9")}</NavLink>
          </div>
        </div>
      </div>
      <div className="main-navbar-small">
        <div className="main-navbar-1">
          <Logo />
        </div>
        <div className="fas-cont" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {activeMenu && (
          <ul className=" small-screen-ul">
            <li>
              <NavLink to="/" onClick={handleClick}>
                {i18next.t("thome1")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleClick}>
                {i18next.t("thome2")}
              </NavLink>
            </li>
            <li>
              <button
                className="dropdown-toggle nav-support"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {i18next.t("thome3")}
              </button>

              <ul
                className="dropdown-menu support-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/contact-us"
                    onClick={handleClick}
                  >
                    {i18next.t("thome4")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="faq"
                    onClick={handleClick}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/marketing-policy"
                    onClick={handleClick}
                  >
                    {i18next.t("thome5")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/privacy-policy"
                    onClick={handleClick}
                  >
                    {i18next.t("thome6")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/refer-and-earn" onClick={handleClick}>
                {i18next.t("thome7")}
              </NavLink>
            </li>
            <li className="navbar-register">
              <NavLink to="/register" onClick={handleClick}>
                {i18next.t("thome8")}
              </NavLink>
            </li>
            <li className="navbar-login">
              <NavLink to="/login" onClick={handleClick}>
                {i18next.t("thome9")}
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
