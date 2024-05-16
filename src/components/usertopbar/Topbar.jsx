import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../redux/slice/userSlice";
import Logo from "../logo/userindex";

import { BiUser } from "react-icons/bi";
import i18next from "i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";

import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import { SiHelpdesk } from "react-icons/si";
import { TbMessageShare } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

// import NotificationCenter from "react-notification-center-component";

import { Dropdown, Menu } from "antd";

const Topbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

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

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const menu = (
    <Menu
      className="topbar-menu"
      items={[
        {
          key: "1",
          label: (
            <Link className="topbar-menu-link" to="/user">
              {i18next.t("tnew10")}
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link className="topbar-menu-link" to="/user-reset-password">
              {i18next.t("tnew3")}
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link className="topbar-menu-link" to="/referral">
              {i18next.t("tnew4")}
            </Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link className="topbar-menu-link" to="/help/send-mail">
              {i18next.t("tnew11")}
            </Link>
          ),
        },
        {
          key: "5",
          label: (
            <h6 onClick={onLogout} className="topbar-signout">
              <MdOutlineLogout />
              <span>{i18next.t("tnew13")}</span>
            </h6>
          ),
        },
      ]}
    />
  );

  const firstTwoChars = user?.user?.firstname
    ? user?.user?.firstname.slice(0, 2)
    : null;

  return (
    <div className="topbar-cont">
      <div className="topbar-main">
        <div className="topbar-sub-cont">
          <div className="topbar-menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="topbar-logo-1">
            <Logo />
          </div>
        </div>

        <div className="topbar-cont-1">
          <div className="topbar-cont-1-2">
            <div className="aiuser-cont">
              <BiUser className="aiusericon" />
            </div>
            <div className="topbar-sub">
              <div className="topbar-cont-1-2-1">
                <p
                  className={
                    user?.user?.verified === "Verified" ||
                    user?.user?.verified === "verified"
                      ? "topbar-verified"
                      : "topbar-notverified"
                  }
                >
                  {user?.user?.verified}
                </p>
                <h6>{user?.user?.firstname}</h6>
              </div>
              <div className="topbar-cont-1-2-2">
                <Dropdown placement="bottomLeft" overlay={menu}>
                  <IoIosArrowDown className="topbar-dropdown-icon" />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeMenu && (
        <div className="topbar-cont-2">
          <div className="topbar-cont-sub-2">
            <div className="topbar-cont-sub-2-1">
              <div className="topbar-cont-sub-2-1-1">
                <h6>{firstTwoChars}</h6>
              </div>

              <div className="topbar-cont-sub-2-1-2">
                <h6>{user?.user?.firstname}</h6>
                <p>{user?.user?.email}</p>
              </div>
            </div>
            <div className="topbar-cont-sub-2-6">
              <h6>{i18next.t("tnew14")}</h6>
              <ul className="topbar-menu-list">
                <li className="topbar-nav-list">
                  <NavLink
                    className="topbar-link"
                    activeclassname="active"
                    to="/dashboard"
                    onClick={handleClick}
                  >
                    <span>
                      <DashboardIcon />
                    </span>
                    {i18next.t("tdashboard1")}
                  </NavLink>
                </li>
                <li className="topbar-nav-list">
                  <NavLink
                    className="topbar-link"
                    activeclassname="active"
                    to="/wallet"
                    onClick={handleClick}
                  >
                    <span>
                      <AccountBalanceWalletIcon />
                    </span>
                    {i18next.t("tdashboard2")}
                  </NavLink>
                </li>
                <li className="topbar-nav-list">
                  <NavLink
                    className="topbar-link"
                    activeclassname="active"
                    to="/funds"
                    onClick={handleClick}
                  >
                    <span>
                      <PaymentIcon />
                    </span>
                    {i18next.t("tdashboard3")}
                  </NavLink>
                </li>

                <li className="topbar-nav-list">
                  <NavLink
                    className="topbar-link"
                    activeclassname="active"
                    to="/convert"
                    onClick={handleClick}
                  >
                    <span>
                      <CurrencyExchangeIcon />
                    </span>
                    {i18next.t("tdashboard4")}
                  </NavLink>
                </li>
                <li className="topbar-nav-list">
                  <NavLink
                    className="topbar-link"
                    activeclassname="active"
                    to="/help"
                    onClick={handleClick}
                  >
                    <span>
                      <FaHandsHelping />
                    </span>
                    {i18next.t("tdashboard6")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="topbar-cont-sub-2-2">
            <Link to="/user-reset-password" onClick={handleClick}>
              <span>
                <RiLockPasswordLine />
              </span>{" "}
              {i18next.t("tnew3")}
            </Link>
            <Link to="/referral" onClick={handleClick}>
              <span>
                <FaUserFriends />
              </span>{" "}
              {i18next.t("tnew4")}
            </Link>
          </div>
          <div className="topbar-cont-sub-2-4">
            <Link to="/user" onClick={handleClick}>
              <span>
                <BiUser />
              </span>{" "}
              {i18next.t("tnew10")}
            </Link>
            <Link to="/help/send-mail" onClick={handleClick}>
              <span>
                <SiHelpdesk />
              </span>{" "}
              {i18next.t("tnew11")}
            </Link>
            <Link to="/help/sent-emails" onClick={handleClick}>
              <span>
                <TbMessageShare />
              </span>{" "}
              {i18next.t("tnew12")}
            </Link>
          </div>

          <div className="topbar-cont-sub-2-5">
            <h6 onClick={onLogout}>
              <span>
                <MdOutlineLogout />
              </span>
              {i18next.t("tnew13")}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
