import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const AdminUserNav = ({ user }) => {
  return (
    <div className="admin-nav-container">
      <ul className="admin-menu-list">
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/deposits`}
          >
            Deposits
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/withdrawals`}
          >
            Withdrawals
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/messages`}
          >
            Messages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminUserNav;
