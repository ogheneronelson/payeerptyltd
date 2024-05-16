import React from "react";
import "./style.css";

const MinorFooter = () => {
  return (
    <div className="minorfooter-main">
      <div className="minorfooter-main-1">
        <div>
          <p>
            © {new Date().getFullYear()} Payeer Pty Limited LLC, all rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinorFooter;
