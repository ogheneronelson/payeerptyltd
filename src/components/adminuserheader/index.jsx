import React, { useState, useEffect } from "react";
import Logo from "../logo/adminuser";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../../redux/slice/adminSlice";

const AdminUserNav = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate("/admin/login");
  };
  return (
    <div className="admin-usermain">
      <div className="admin-user-navbar-cont">
        <div className="admin-user-navbar-cont-1">
          <Logo />
          <div className="admin-fas-cont" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <div className="admin-user-navbar-cont-2">
          <button onClick={onLogout} className="admin-user-navbar-logout">
            Logout
          </button>
        </div>
      </div>
      <div className="admin-nav large-screen-admin-nav">
        <ul className="largeadmin-nav-menu-list">
          <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/deposits"
            >
              Deposits
            </NavLink>
          </li>
          <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/withdrawals"
            >
              Withdrawals
            </NavLink>
          </li>
          {/* <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/transfers"
            >
              Transfers
            </NavLink>
          </li> */}
          <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/messages"
            >
              Messages
            </NavLink>
          </li>
          <li className="largeadmin-nav-list">
            <NavLink
              className="largeadmin-nav-link"
              activeclassname="active"
              to="/admin/issues"
            >
              Issues
            </NavLink>
          </li>
        </ul>
      </div>
      {activeMenu && (
        <div className="admin-nav small-screen-admin-nav">
          <ul className="smalladmin-nav-menu-list">
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/deposits"
              >
                Deposits
              </NavLink>
            </li>
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/withdrawals"
              >
                Withdrawals
              </NavLink>
            </li>
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/transfers"
              >
                Transfers
              </NavLink>
            </li>
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/messages"
              >
                Messages
              </NavLink>
            </li>
            <li className="smalladmin-nav-list">
              <NavLink
                onClick={handleClick}
                className="smalladmin-nav-link"
                activeclassname="active"
                to="/admin/issues"
              >
                Issues
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminUserNav;
