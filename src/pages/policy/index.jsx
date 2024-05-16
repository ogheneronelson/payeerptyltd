import React from "react";
import "./style.css";
import i18next from "i18next";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const index = () => {
  return (
    <DocumentTitle title="Privacy Policy | Payeer Pty Limited">
      <div className="privacy-container">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("tprivacy60")}</h1>
            <p className="reuse-text">
              Home <span> {">"} Privacy Policy </span>
            </p>
          </div>
        </Reusebg>
        <div className="privacy-main-cont">
          <div className="privacy-sub-1">
            <div>
              <h3 className="privacy-center">{i18next.t("tprivacy61")}</h3>
              <p>{i18next.t("tprivacy62")}</p>
              <p>{i18next.t("tprivacy63")}</p>
              <ul>
                <li>{i18next.t("tprivacy64")}</li>
                <li>{i18next.t("tprivacy65")}</li>
                <li>{i18next.t("tprivacy66")}</li>
                <li>{i18next.t("tprivacy67")}</li>
                <li>{i18next.t("tprivacy68")}</li>
                <li>{i18next.t("tprivacy69")}</li>
                <li>{i18next.t("tprivacy70")}</li>
              </ul>
            </div>
            <div>
              <h3>{i18next.t("tprivacy71")}</h3>
              <p>{i18next.t("tprivacy72")}</p>
              <ul>
                <li>{i18next.t("tprivacy73")}</li>
                <li>{i18next.t("tprivacy74")}</li>
                <li>{i18next.t("tprivacy75")}</li>
                <li>{i18next.t("tprivacy76")}</li>
                <li>{i18next.t("tprivacy77")}</li>
              </ul>
              <p>{i18next.t("tprivacy78")}</p>
              <ul>
                <li>{i18next.t("tprivacy79")}</li>
                <li>{i18next.t("tprivacy80")}</li>
              </ul>
            </div>
            <div>
              <h3>{i18next.t("tprivacy81")}</h3>
              <p>{i18next.t("tprivacy82")}</p>
              <p>{i18next.t("tprivacy83")}</p>
              <p>{i18next.t("tprivacy84")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy85")}</h3>
              <p>{i18next.t("tprivacy86")}</p>
              <ul>
                <li>{i18next.t("tprivacy87")}</li>
                <li>{i18next.t("tprivacy88")}</li>
                <li>{i18next.t("tprivacy99")}</li>
                <li>{i18next.t("tprivacy90")}</li>
                <li>{i18next.t("tprivacy91")}</li>
                <li>{i18next.t("tprivacy92")}</li>
                <li>{i18next.t("tprivacy93")}</li>
              </ul>
              <p>{i18next.t("tprivacy94")}</p>
              <p>{i18next.t("tprivacy95")}</p>
            </div>
            <div>
              <h3 className="privacy-center">{i18next.t("tprivacy96")}</h3>
              <p>{i18next.t("tprivacy97")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy98")}</h3>
              <p>{i18next.t("tprivacy99")}</p>
              <p>{i18next.t("tprivacy100")}</p>
              <p>{i18next.t("tprivacy101")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy102")}</h3>
              <p>{i18next.t("tprivacy103")}</p>
              <ul>
                <li>{i18next.t("tprivacy104")}</li>
                <li>{i18next.t("tprivacy105")}</li>
                <li>{i18next.t("tprivacy106")}</li>
                <li>{i18next.t("tprivacy107")}</li>
              </ul>
            </div>
            <div>
              <h3>{i18next.t("tprivacy108")}</h3>
              <p>{i18next.t("tprivacy109")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy110")}</h3>
              <p>{i18next.t("tprivacy111")}</p>
              <p>{i18next.t("tprivacy112")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy113")}</h3>
              <p>{i18next.t("tprivacy114")}</p>
              <p>{i18next.t("tprivacy115")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy116")}</h3>
              <p>{i18next.t("tprivacy117")}</p>
              <ul>
                <li>{i18next.t("tprivacy118")}</li>
                <li>{i18next.t("tprivacy119")}</li>
              </ul>
              <p>{i18next.t("tprivacy120")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy121")}</h3>
              <p>{i18next.t("tprivacy122")}</p>
            </div>
            <div>
              <h3>{i18next.t("tprivacy123")}</h3>
              <p>{i18next.t("tprivacy124")}</p>
            </div>
            <div>
              <h3>{i18next.t("thome4")}</h3>
              <p>{i18next.t("tprivacy125")}</p>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default index;
