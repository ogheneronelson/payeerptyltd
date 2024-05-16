import React from "react";
import "./style.css";
import DocumentTitle from "react-document-title";

const Maintenance = () => {
  return (
    <DocumentTitle title="Website Under Maintenance | Payeer Pty Limited">
      <div className="maintenance-main">
        <h2>Website is Under Maintenance, please checkback later</h2>
      </div>
    </DocumentTitle>
  );
};

export default Maintenance;
