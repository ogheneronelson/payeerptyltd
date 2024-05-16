import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../redux/slice/userSlice";
import NewLogo from "../logo/newlogo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { RiRefund2Fill } from "react-icons/ri";
import { TbReceiptRefund } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { SiHelpdesk } from "react-icons/si";
import { TbMessageShare } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [opened, setOpened] = useState(true);
  const [notOpened, setNotOpened] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { exchangeData } = useSelector((state) => state.exchange);

  const userCurrency = user?.user?.currency;
  const curr = exchangeData?.rates[userCurrency];

  const handleOpen = () => {
    setOpened(!opened);
  };
  const handleNotOpen = () => {
    setNotOpened(!notOpened);
  };

  const btcbalanceusd = user?.user?.BTC?.deposit;

  const ethbalanceusd = user?.user?.ETH?.deposit;

  const bnbbalanceusd = user?.user?.BNB?.deposit;

  const usdtbalanceusd = user?.user?.USDT?.deposit;

  const ltcbalanceusd = user?.user?.LTC?.deposit;

  const bchbalanceusd = user?.user?.BCH?.deposit;

  const totalDeposit =
    btcbalanceusd +
    ethbalanceusd +
    bnbbalanceusd +
    usdtbalanceusd +
    ltcbalanceusd +
    bchbalanceusd;

  const depositInUsd = totalDeposit.toFixed(2);

  const depositInCur = (totalDeposit * curr).toFixed(2);

  const { BTC, ETH, BNB, USDT, LTC, BCH } = user?.user;

  const profit =
    BTC?.profit +
    ETH?.profit +
    BNB?.profit +
    USDT?.profit +
    LTC?.profit +
    BCH?.profit;

  const bonus =
    BTC?.bonus +
    ETH?.bonus +
    BNB?.bonus +
    USDT?.bonus +
    LTC?.bonus +
    BCH?.bonus;

  const total = profit + bonus;

  const totalProfitInUsd = total.toFixed(2);

  const totalProfitInCur = (totalProfitInUsd * curr).toFixed(2);

  const firstTwoChars = user?.user?.firstname
    ? user?.user?.firstname.slice(0, 2)
    : null;

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="usernav-container">
      <div className="usernav-container-sub"></div>
      <div className="large-screen-hid">
        <div className="large-screen-cont">
          <div className="large-screen-main">
            <div className="large-screen-cont-sub">
              <NewLogo />
              <div className="large-screen-icons">
                {opened ? (
                  <AiOutlineArrowLeft
                    className="large-icon"
                    onClick={handleOpen}
                  />
                ) : (
                  <AiOutlineArrowRight
                    className="large-icon"
                    onClick={handleOpen}
                  />
                )}
              </div>
            </div>
            <div className="large-screen-cont-sub-1">
              <div className="large-screen-cont-sub-11">
                <div className="large-screen-cont-sub-1-1">
                  <h6>{firstTwoChars}</h6>
                </div>
                {opened && (
                  <div className="large-screen-cont-sub-1-2">
                    <h6>{user?.user?.firstname}</h6>
                    <p>{user?.user?.email}</p>
                  </div>
                )}
                {opened && (
                  <div className="large-screen-cont-sub-1-3">
                    {!notOpened && (
                      <IoIosArrowDown
                        className="not-opened-icon"
                        onClick={handleNotOpen}
                      />
                    )}
                    {notOpened && (
                      <IoIosArrowUp
                        className="not-opened-icon"
                        onClick={handleNotOpen}
                      />
                    )}
                  </div>
                )}
              </div>
              {opened && (
                <div>
                  {notOpened && (
                    <div className="large-screen-cont-sub-1-4">
                      <Link to="/user-reset-password">
                        <span>
                          <RiLockPasswordLine />
                        </span>{" "}
                        {i18next.t("tnew3")}
                      </Link>
                      <Link to="/referral">
                        <span>
                          <FaUserFriends />
                        </span>{" "}
                        {i18next.t("tnew4")}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            {opened && (
              <div className="large-main-screen">
                <div className="large-main-screen-1">
                  <h6> {i18next.t("tnew5")}</h6>
                  <p className="large-main-p1">
                    {depositInUsd} <span>USD</span>
                  </p>
                  {userCurrency !== "USD" && (
                    <p className="large-main-p2">
                      {depositInCur} <span>{userCurrency}</span>
                    </p>
                  )}
                </div>
                <div className="large-main-screen-2">
                  <h6> {i18next.t("tnew6")}</h6>
                  <div>
                    <p className="large-main-2-p1">
                      {totalProfitInUsd} <span>USD</span>
                    </p>
                    {userCurrency !== "USD" && (
                      <p className="large-main-2-p2">
                        {totalProfitInCur} <span>{userCurrency}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="large-main-screen-3">
                  <Link to="/funds/withdraw">
                    <span>
                      <TbReceiptRefund />
                    </span>{" "}
                    {i18next.t("tnew7")}
                  </Link>
                  <Link to="/funds/deposit">
                    <span>
                      <RiRefund2Fill />
                    </span>{" "}
                    {i18next.t("tnew8")}
                  </Link>
                </div>
              </div>
            )}
            {opened && (
              <div className="large-main-screen-sub-1">
                <Link to="/user">
                  <span>
                    <BiUser />
                  </span>{" "}
                  {i18next.t("tnew10")}
                </Link>
                <Link to="/help/send-mail">
                  <span>
                    <SiHelpdesk />
                  </span>{" "}
                  {i18next.t("tnew11")}
                </Link>
                <Link to="/help/sent-emails">
                  <span>
                    <TbMessageShare />
                  </span>{" "}
                  {i18next.t("tnew12")}
                </Link>
              </div>
            )}
            {opened && (
              <div className="large-main-screen-sub-2">
                <h6 onClick={onLogout} className="large-screen-signout">
                  <span>
                    <MdOutlineLogout />
                  </span>
                  {i18next.t("tnew13")}
                </h6>
              </div>
            )}

            <div className="usernav-menu-cont">
              <h6> {i18next.t("tnew14")}</h6>
              <ul className="usernav-menu-list">
                <li className="usernav-nav-list">
                  <NavLink
                    className="usernav-link"
                    activeclassname="active"
                    to="/dashboard"
                  >
                    <span>
                      <DashboardIcon />
                    </span>
                    {opened && [i18next.t("tdashboard1")]}
                  </NavLink>
                </li>
                <li className="usernav-nav-list">
                  <NavLink
                    className="usernav-link"
                    activeclassname="active"
                    to="/wallet"
                  >
                    <span>
                      <AccountBalanceWalletIcon />
                    </span>
                    {opened && [i18next.t("tdashboard2")]}
                  </NavLink>
                </li>
                <li className="usernav-nav-list">
                  <NavLink
                    className="usernav-link"
                    activeclassname="active"
                    to="/funds"
                  >
                    <span>
                      <PaymentIcon />
                    </span>
                    {opened && [i18next.t("tdashboard3")]}
                  </NavLink>
                </li>

                <li className="usernav-nav-list">
                  <NavLink
                    className="usernav-link"
                    activeclassname="active"
                    to="/convert"
                  >
                    <span>
                      <CurrencyExchangeIcon />
                    </span>
                    {opened && [i18next.t("tdashboard4")]}
                  </NavLink>
                </li>
                <li className="usernav-nav-list">
                  <NavLink
                    className="usernav-link"
                    activeclassname="active"
                    to="/help"
                  >
                    <span>
                      <FaHandsHelping />
                    </span>
                    {opened && [i18next.t("tdashboard6")]}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
