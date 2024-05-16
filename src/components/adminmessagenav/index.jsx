import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const AdminMessageNav = ({ user }) => {
  return (
    <div className="admin-nav-container">
      <ul className="admin-menu-list">
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/messages/send`}
          >
            New Message
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/messages/sent`}
          >
           Sent Messages
          </NavLink>
        </li>
        <li className="admin-nav-list">
          <NavLink
            className="admin-link"
            activeclassname="active"
            to={`/admin/user/${user._id}/messages/inbox`}
          >
           Inbox
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMessageNav;
