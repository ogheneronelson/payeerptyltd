import React from "react";
import "./style.css";
import i18next from "i18next";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const Market = () => {
  return (
    <DocumentTitle title="Marketing Policy | Payeer Pty Limited">
      <div className="main-market">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("tmarket47")}</h1>
            <p className="reuse-text">
              Home <span>{">"} Marketing Policy</span>{" "}
            </p>
          </div>
        </Reusebg>
        <div className="market-main-cont">
          <h1>{i18next.t("tmarket47")}</h1>
          <ol>
            <li>{i18next.t("tmarket48")}</li>
            <li>{i18next.t("tmarket49")}</li>
            <li>{i18next.t("tmarket50")}</li>
            <li>{i18next.t("tmarket51")}</li>
            <li>{i18next.t("tmarket52")}</li>
            <li>{i18next.t("tmarket53")}</li>
            <li>{i18next.t("tmarket54")}</li>
          </ol>
          <p>{i18next.t("tmarket55")}</p>
          <p>{i18next.t("tmarket56")}</p>
          <p>{i18next.t("tmarket57")}</p>
          <p>{i18next.t("tmarket58")}</p>
          <p>{i18next.t("tmarket59")}</p>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default Market;
