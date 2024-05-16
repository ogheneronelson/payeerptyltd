import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const CoinNav = ({user}) => {
  
  return (
    <div className="admin-nav-container">
      <ul className="admin-menu-list">
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/btc`}
          >
            BTC
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/eth`}
          >
            ETH
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/bnb`}
          >
            BNB
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/usdt`}
          >
            USDT
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/ltc`}
          >
            LTC
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/edit-user/${user._id}/bch`}
          >
            BCH
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CoinNav;
