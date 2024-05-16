import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const Faq = () => {
  const [show12, setShow12] = useState(true);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [show16, setShow16] = useState(false);
  const [show17, setShow17] = useState(false);
  const [show18, setShow18] = useState(false);
  const [show19, setShow19] = useState(false);
  const [show20, setShow20] = useState(false);
  const [show21, setShow21] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);

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
  const handleShow5 = () => {
    setShow5(!show5);
  };
  const handleShow6 = () => {
    setShow6(!show6);
  };
  const handleShow7 = () => {
    setShow7(!show7);
  };
  const handleShow8 = () => {
    setShow8(!show8);
  };
  const handleShow9 = () => {
    setShow9(!show9);
  };
  const handleShow10 = () => {
    setShow10(!show10);
  };
  const handleShow11 = () => {
    setShow11(!show11);
  };
  const handleShow12 = () => {
    setShow12(!show12);
  };
  const handleShow13 = () => {
    setShow13(!show13);
  };
  const handleShow14 = () => {
    setShow14(!show14);
  };
  const handleShow15 = () => {
    setShow15(!show15);
  };
  const handleShow16 = () => {
    setShow16(!show16);
  };
  const handleShow17 = () => {
    setShow17(!show17);
  };
  const handleShow18 = () => {
    setShow18(!show18);
  };
  const handleShow19 = () => {
    setShow19(!show19);
  };
  const handleShow20 = () => {
    setShow20(!show20);
  };
  const handleShow21 = () => {
    setShow21(!show21);
  };
  return (
    <DocumentTitle title="FAQ | Payeer Pty Limited">
      <div className="faq-container">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("tfaq23")}</h1>
            <p className="reuse-text">
              Home <span> {">"} Frequently Asked Questions </span>
            </p>
          </div>
        </Reusebg>
        <div class="faq-sub">
          <h2>{i18next.t("tfaq23")}</h2>
          <div class="faq-sub-1">
            <div class="faq-main">
              <div onClick={handleShow12} className="faq">
                <div className={show12 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq1")}</h2>
                  <i
                    className={show12 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show12 && <p className="faq-span">{i18next.t("tnfaq2")}</p>}
              </div>
              <div onClick={handleShow13} className="faq">
                <div className={show13 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq3")}</h2>
                  <i
                    className={show13 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show13 && <p className="faq-span">{i18next.t("tnfaq4")}</p>}
              </div>
              <div onClick={handleShow14} className="faq">
                <div className={show14 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq5")}</h2>
                  <i
                    className={show14 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show14 && <p className="faq-span">{i18next.t("tnfaq6")}</p>}
              </div>
              <div onClick={handleShow15} className="faq">
                <div className={show15 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq7")}</h2>
                  <i
                    className={show15 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show15 && <p className="faq-span">{i18next.t("tnfaq8")}</p>}
              </div>
              <div onClick={handleShow21} className="faq">
                <div className={show21 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq9")}</h2>
                  <i
                    className={show21 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show21 && <p className="faq-span">{i18next.t("tnfaq10")}</p>}
              </div>
              <div onClick={handleShow1} className="faq">
                <div className={show1 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq24")}</h2>
                  <i
                    className={show1 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show1 && <p className="faq-span">{i18next.t("tfaq25")}</p>}
              </div>
              <div onClick={handleShow16} className="faq">
                <div className={show16 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq11")}</h2>
                  <i
                    className={show16 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show16 && <p className="faq-span">{i18next.t("tnfaq12")}</p>}
              </div>
              <div onClick={handleShow17} className="faq">
                <div className={show17 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq13")}</h2>
                  <i
                    className={show17 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show17 && <p className="faq-span">{i18next.t("tnfaq14")}</p>}
              </div>
              <div onClick={handleShow18} className="faq">
                <div className={show18 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq15")}</h2>
                  <i
                    className={show18 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show18 && <p className="faq-span">{i18next.t("tnfaq16")}</p>}
              </div>
              <div onClick={handleShow2} className="faq">
                <div className={show2 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq26")}</h2>
                  <i
                    className={show2 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show2 && <p className="faq-span">{i18next.t("tfaq27")}</p>}
              </div>
              <div onClick={handleShow3} className="faq">
                <div className={show3 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq28")}</h2>
                  <i
                    className={show3 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show3 && <p className="faq-span">{i18next.t("tfaq29")}</p>}
              </div>{" "}
              <div onClick={handleShow4} className="faq">
                <div className={show4 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq30")}</h2>
                  <i
                    className={show4 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show4 && <p className="faq-span">{i18next.t("tfaq31")}</p>}
              </div>{" "}
              <div onClick={handleShow19} className="faq">
                <div className={show19 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq17")}</h2>
                  <i
                    className={show19 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show19 && <p className="faq-span">{i18next.t("tnfaq18")}</p>}
              </div>
              <div onClick={handleShow5} className="faq">
                <div className={show5 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq32")}</h2>
                  <i
                    className={show5 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show5 && <p className="faq-span">{i18next.t("tfaq33")}</p>}
              </div>{" "}
              <div onClick={handleShow6} className="faq">
                <div className={show6 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq34")}</h2>
                  <i
                    className={show6 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show6 && (
                  <p className="faq-span">
                    {i18next.t("tfaq35")}
                    <strong>{i18next.t("tfaq36")}</strong>
                  </p>
                )}
              </div>{" "}
              <div onClick={handleShow7} className="faq">
                <div className={show7 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq37")}</h2>
                  <i
                    className={show7 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show7 && <p className="faq-span">{i18next.t("tfaq38")}</p>}
              </div>{" "}
              <div onClick={handleShow8} className="faq">
                <div className={show8 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq39")}</h2>
                  <i
                    className={show8 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show8 && <p className="faq-span">{i18next.t("tfaq40")}</p>}
              </div>{" "}
              <div onClick={handleShow9} className="faq">
                <div className={show9 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq41")}</h2>
                  <i
                    className={show9 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show9 && <p className="faq-span">{i18next.t("tfaq42")}</p>}
              </div>{" "}
              <div onClick={handleShow10} className="faq">
                <div className={show10 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq43")}</h2>
                  <i
                    className={show10 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show10 && <p className="faq-span">{i18next.t("tfaq44")}</p>}
              </div>{" "}
              <div onClick={handleShow11} className="faq">
                <div className={show11 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tfaq45")}</h2>
                  <i
                    className={show11 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show11 && <p className="faq-span">{i18next.t("tfaq46")}</p>}
              </div>
              <div onClick={handleShow20} className="faq">
                <div className={show20 ? "faq-color-1" : "faq-color-2"}>
                  <h2>{i18next.t("tnfaq19")}</h2>
                  <i
                    className={show20 ? "fas fa-times" : "fas fa-solid fa-plus"}
                  ></i>
                </div>
                {show20 && <p className="faq-span">{i18next.t("tnfaq20")}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default Faq;
