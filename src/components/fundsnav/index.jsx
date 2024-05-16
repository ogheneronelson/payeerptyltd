import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbReceiptRefund } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";

const FundsNav = () => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="funds-nav-main">
      <div className="funds-icon" onClick={handleClick}>
        {clicked ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </div>
      {clicked && (
        <div className="funds-nav">
          <ul className="funds-menu-list">
            {" "}
            <li className="funds-nav-list">
              <NavLink
                className="funds-link"
                activeclassname="active"
                to="/funds/deposit"
              ><span> <RiRefund2Fill /></span>
                {i18next.t("tfunds60")}
              </NavLink>
            </li>
            <li className="funds-nav-list">
              <NavLink
                className="funds-link"
                activeclassname="active"
                to="/funds/withdraw"
              ><span><TbReceiptRefund /></span>
                {i18next.t("tfunds62")}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FundsNav;
