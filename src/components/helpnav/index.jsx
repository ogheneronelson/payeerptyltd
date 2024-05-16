import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbMessageShare } from "react-icons/tb";
import { AiFillMail } from "react-icons/ai";

const Help = () => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="help-nav-main">
      <div className="help-icon" onClick={handleClick}>
        {clicked ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </div>
      {clicked && (
        <div className="help-nav">
          <ul className="help-menu-list">
            {" "}
            <li className="help-nav-list">
              <NavLink
                className="help-link"
                activeclassname="active"
                to="/help/send-mail"
              >
                <span>
                  <AiFillMail />
                </span>
                {i18next.t("tnew1")}
              </NavLink>
            </li>
            <li className="help-nav-list">
              <NavLink
                className="help-link"
                activeclassname="active"
                to="/help/sent-emails"
              >
                {" "}
                <span>
                  <TbMessageShare />
                </span>
                {i18next.t("tnew2")}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Help;
