import React from "react";
import "./style.css";
import i18next from "i18next";
import LogoImg from "../../images/about-us.png";
import GppGoodSharpIcon from "@mui/icons-material/GppGoodSharp";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const About = () => {
  return (
    <DocumentTitle title="About Us | Payeer Pty Limited">
      <div className="about-container">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("tabout39")}</h1>
            <p className="reuse-text">
              Home <span>{">"} About</span>
            </p>
          </div>
        </Reusebg>
        <div className="about-sub">
          <h2>{i18next.t("tabout39")}</h2>
          <div className="company-sub-cont">
            <div className="company-sub-1">
              <h1>{i18next.t("tabout40")}</h1>
              <p>{i18next.t("tabout41")}</p>
            </div>
            <div className="company-sub-2">
              <h1>{i18next.t("tabout42")}</h1>
              <p>{i18next.t("tabout43")}</p>
              <p>{i18next.t("tabout44")}</p>
              <p>{i18next.t("tabout45")}</p>
              <div className="company-sub-2-1">
                <div className="company-sub-2-1-1">
                  <div>
                    <h3>200+</h3>
                    <p>{i18next.t("tabout46")}</p>
                  </div>
                  <div>
                    <h3>60+</h3>
                    <p>{i18next.t("tabout47")}</p>
                  </div>
                  <div>
                    <h3>5,000,000+</h3>
                    <p>{i18next.t("tabout48")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-sub-1">
              <div className="about-sub-1-1">
                <div>
                  <div>
                    <h3>{i18next.t("tabout49")}</h3>
                    <p>{i18next.t("tabout50")}</p>
                    <h3>{i18next.t("tabout51")}</h3>
                    <p>{i18next.t("tabout52")}</p>
                  </div>
                </div>
              </div>
              <div className="about-sub-1-2">
                <img src={LogoImg} alt="about" />
              </div>
            </div>

            <div className="about-sub-2">
              <div className="about-sub-2-1">
                <div>
                  <h3>{i18next.t("tabout53")}</h3>
                  <p>{i18next.t("tabout54")}</p>
                </div>
                <div>
                  <h3>{i18next.t("tabout55")}</h3>
                  <p>{i18next.t("tabout56")}</p>
                </div>
              </div>

              <div className="about-sub-2-2">
                <div>
                  <h3>{i18next.t("tabout57")}</h3>
                  <p>{i18next.t("tabout58")}</p>
                </div>
                <div>
                  <h3>{i18next.t("tabout59")}</h3>
                  <p>{i18next.t("tabout60")}</p>
                  <p>{i18next.t("tabout61")}</p>
                  <p>{i18next.t("tabout62")}</p>
                  <p>{i18next.t("tabout63")}</p>
                </div>
              </div>
            </div>
            <div className="about-sub-3">
              <div>
                <div>
                  <h3>{i18next.t("tabout64")}</h3>
                  <p>{i18next.t("tabout65")}</p>
                  <p>{i18next.t("tabout66")}</p>
                </div>
                <div>
                  <h3>{i18next.t("tabout67")}</h3>
                  <p>{i18next.t("tabout68")}</p>
                  <p>{i18next.t("tabout69")}</p>
                </div>
                <div>
                  <h3>{i18next.t("tabout70")}</h3>
                  <p>{i18next.t("tabout71")}</p>
                </div>
              </div>
              <div>
                <div>
                  <h3>{i18next.t("tabout72")}</h3>
                  <ul>
                    <li>{i18next.t("tabout73")}</li>
                    <li>{i18next.t("tabout74")}</li>
                    <li>{i18next.t("tabout75")}</li>
                    <li>{i18next.t("tabout76")}</li>
                    <li>{i18next.t("tabout77")}</li>
                    <li>{i18next.t("tabout78")}</li>
                    <li>{i18next.t("tabout79")}</li>
                    <li>{i18next.t("tabout80")}</li>
                    <li>{i18next.t("tabout81")}</li>
                    <li>{i18next.t("tabout82")}</li>
                    <li>{i18next.t("tabout83")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="company-sub-3">
              <h1>{i18next.t("tabout84")}</h1>
              <div className="company-sub-3-1">
                <div>
                  <ul>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>{i18next.t("tabout85")}</span>
                    </li>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>{i18next.t("tabout86")}</span>
                    </li>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>N{i18next.t("tabout87")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>{i18next.t("tabout88")}</span>
                    </li>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>{i18next.t("tabout89")}</span>
                    </li>
                    <li>
                      <GppGoodSharpIcon className="achieve-icon" />
                      <span>{i18next.t("tabout90")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default About;
