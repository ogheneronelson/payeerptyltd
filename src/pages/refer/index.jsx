import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Link } from "react-router-dom";
import ReferImg from "../../images/refer.png";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const Refer = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1);
  };

  const handleShow2 = () => {
    setShow2(!show2);
  };

  const handleShow3 = () => {
    setShow3(!show3);
  };

  const handleShow4 = () => {
    setShow4(!show4);
  };

  return (
    <DocumentTitle title="Refer & Earn | Payeer Pty Limited">
      <div className="tell-main">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("thome7")}</h1>
            <p className="reuse-text">
              Home <span> {">"} Refer & Earn </span>
            </p>
          </div>
        </Reusebg>
        <div className="tell-main-cont">
          <div className="tell-cont-1">
            <div className="tell-sub-cont-1">
              <h1> {i18next.t("trefer1")}</h1>
              <p>{i18next.t("trefer2")}</p>
            </div>
            <div className="tell-image-container">
              <img className="tell-image" src={ReferImg} alt="tell a friend" />
            </div>
          </div>
          <div className="tell-cont-2">
            <h1>{i18next.t("trefer3")}</h1>
            <div>
              <ol>
                <li className="tell-list">{i18next.t("trefer4")}</li>
                <li className="tell-list">{i18next.t("trefer5")}</li>
                <li className="tell-list">{i18next.t("trefer6")}</li>
              </ol>
            </div>
          </div>
          <div className="tell-cont-3">
            <div className="terms-main">
              <h1>
                <strong>{i18next.t("trefer7")}</strong>
              </h1>
              <div>
                <ul>
                  <li className="terms-list">{i18next.t("trefer8")}</li>
                  <li className="terms-list">{i18next.t("trefer9")}</li>
                  <li className="terms-list">{i18next.t("trefer10")}</li>
                  <li className="terms-list">{i18next.t("trefer11")}</li>
                  <li className="terms-list">{i18next.t("trefer12")}</li>
                  <li className="terms-list">{i18next.t("trefer13")}</li>
                  <li className="terms-list">{i18next.t("trefer14")}</li>
                  <li className="terms-list">{i18next.t("trefer15")}</li>
                  <li className="terms-list">
                    {i18next.t("trefer16")}{" "}
                    <Link to="/terms-and-conditions">
                      {i18next.t("trefer16a")}
                    </Link>{" "}
                    {i18next.t("trefer17")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tell-cont-4">
            <div className="faq-main">
              <h1>
                {i18next.t("trefer18")} <strong>{i18next.t("trefer19")}</strong>
              </h1>
              <div onClick={handleShow1} className="faq">
                <div className={show1 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("trefer20")}</h2>
                  <i
                    className={show1 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show1 && <p className="faq-span">{i18next.t("trefer21")}</p>}
              </div>
              <div onClick={handleShow2} className="faq">
                <div className={show2 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("trefer22")}</h2>
                  <i
                    className={show2 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show2 && (
                  <p className="faq-span">
                    {i18next.t("trefer23")}
                    <strong> {i18next.t("trefer24")} </strong>
                    {i18next.t("trefer25")}
                  </p>
                )}
              </div>
              <div onClick={handleShow3} className="faq">
                <div className={show3 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("trefer26")}</h2>
                  <i
                    className={show3 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show3 && <p className="faq-span">{i18next.t("trefer27")}</p>}
              </div>
              <div onClick={handleShow4} className="faq">
                <div className={show4 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("trefer28")}</h2>
                  <i
                    className={show4 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show4 && <p className="faq-span">{i18next.t("trefer29")}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default Refer;
