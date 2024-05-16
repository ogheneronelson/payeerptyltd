import React from "react";
import "./style.css";
import i18next from "i18next";
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter";
import DocumentTitle from "react-document-title";

const Exchange = () => {
  return (
    <DocumentTitle title="Exchange | Payeer Pty Limited">
      <div className="exchange-main">
        <Topbar />
        <div className="exchange-main-1">
          <h3>{i18next.t("texchange59")}</h3>
          <div className="crypto-converter-widget">
            <crypto-converter-widget
              shadow
              symbol
              live
              background-color="rgb(5, 29, 57)"
              border-radius="0.60rem"
              fiat="united-states-dollar"
              crypto="bitcoin"
              amount="1"
              decimal-places="2"
            ></crypto-converter-widget>
          </div>
          <div className="crypto-converter-link">
            <a
              href="https://currencyrate.today/"
              target="_blank"
              rel="noreferrer"
            >
              CurrencyRate.Today
            </a>
          </div>
        </div>
        <UserFooter />
      </div>
    </DocumentTitle>
  );
};

export default Exchange;
