import React from "react";
import "./style.css";
import i18next from "i18next";
import { Link } from "react-router-dom";
import Visa from "../../images/visa.png";
import Bitcoin from "../../images/bitcoin.png";
import American from "../../images/american-express.png";
import Master from "../../images/mastercard.png";
import Maestro from "../../images/maestro.png";
import PayPal from "../../images/paypal.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-main-1">
        <h2>{i18next.t("tnfooter")}</h2>
        <p>{i18next.t("tnfooter1")}</p>
        <Link to="/register">{i18next.t("tnfooter2")}</Link>
      </div>
      <div className="footer-main-2">
        <div className="footer-main-2-1">
          <div className="footer-main-2-1-1">
            <div className="footer-main-2-1-1-1">
              <h4>O{i18next.t("tnfooter3")}</h4>
              <div className="footer-main-2-1-1-1-1">
                <Link to="/">{i18next.t("tnfooter4")}</Link>
                <Link to="/about">{i18next.t("tnfooter5")}</Link>
                <Link to="/refer-and-earn">{i18next.t("tnfooter6")}</Link>
                <Link to="/login">{i18next.t("tnfooter7")}</Link>
              </div>
            </div>
            <div className="footer-main-2-1-1-1">
              <h4>{i18next.t("tnfooter8")}</h4>
              <div className="footer-main-2-1-1-1-1">
                <Link to="/contact-us">{i18next.t("tnfooter9")}</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="marketing-policy">{i18next.t("tnfooter10")}</Link>
                <Link to="privacy-policy">{i18next.t("tnfooter11")}</Link>
                <Link to="terms-and-conditions">{i18next.t("tnfooter12")}</Link>
              </div>
            </div>
            <div className="footer-main-2-1-1-2">
              <h4>{i18next.t("tnfooter13")}</h4>
              <p>+1 392 3929 210</p>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>

          <div className="footer-main-2-1-2">
            <div className="footer-main-2-1-2-1">
              <div className="footer-main-2-1-2-1-1">
                <div className="footer-main-2-1-2-1-1-1">
                  <h4>$278.76B</h4>
                  <p>{i18next.t("tnfooter14")}</p>
                </div>
                <div className="footer-main-2-1-2-1-1-1">
                  <h4>5.75M+</h4>
                  <p>{i18next.t("tnfooter15")}</p>
                </div>
              </div>
              <div className="footer-main-2-1-2-1-1">
                <div className="footer-main-2-1-2-1-1-1">
                  <h4>500K+</h4>
                  <p>{i18next.t("tnfooter16")}</p>
                </div>
                <div className="footer-main-2-1-2-1-1-1">
                  <h4>7+</h4>
                  <p>{i18next.t("tnfooter17")}</p>
                </div>
              </div>
            </div>
            <div className="footer-main-2-1-2-2">
              <div className="footer-main-2-1-2-2-1">
                <h6>{i18next.t("tnfooter18")}</h6>
              </div>
              <div className="footer-main-2-1-2-2-2">
                <img src={American} alt="American Express" />
                <img src={Master} alt="Master card" />
                <img src={Bitcoin} alt="crypto payment" />
                <img src={Visa} alt="visa card" />
                <img src={Maestro} alt="Maestro" />
                <img src={PayPal} alt="PayPal logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main-2-2">
          <p>
            © {new Date().getFullYear()} Payeer Pty Limited LLC, all rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
