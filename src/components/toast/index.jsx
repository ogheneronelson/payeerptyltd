import React from "react";
import "./style.css";

const Toast = ({ name, amount, country, transaction, icon }) => {
  return (
    <div className="toast-main">
      <img className="toast-icon" src={icon} alt="icon" />
      <p className="toast-text">
        <strong>{name} </strong> just {transaction} <span>{amount}</span>
      </p>
     <img className="toast-image" src={country} alt="country" />
    </div>
  );
};

export default Toast;
