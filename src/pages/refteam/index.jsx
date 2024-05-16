import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { useSelector } from "react-redux";
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter";
import axios from "axios";
import DocumentTitle from "react-document-title";
import { Button } from "antd";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { Row, Col } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const RefTeam = () => {
  const [ref, setRef] = useState([]);
  const [refs, setRefs] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { exchangeData } = useSelector((state) => state.exchange);

  const userCurrency = user?.user?.currency;
  const curr = exchangeData?.rates[userCurrency];

  useEffect(() => {
    const getRef = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/auth/referrals/${user?.user?.id}`,

          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        setRef(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            console.log(data.msg);
          }
          return console.log(error.response.data);
        }
        console.log(error);
      }
    };
    getRef();
  }, [user?.token, user?.user?.id]);

  useEffect(() => {
    const getRefs = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/referral-names/${user?.user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        setRefs(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            console.log(data.msg);
          }
          return console.log(error.response.data);
        }
        console.log(error);
      }
    };
    getRefs();
  }, [user?.token, user?.user?.id]);

  const handleCopy = () => {
    let copyText = document.getElementById("referrallink");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    toast.success(`Referral link copied to clipboard: ${copyText.value} `);
  };

  const refEarnings = user?.user?.referralEarnings;

  return (
    <DocumentTitle title="Referral | Payeer Pty Limited">
      <div className="refteam-main">
        <Topbar />
        <div className="account-referral">
          <h5>{i18next.t("tuser51")}</h5>

          <div className="refteam-ref-cont">
            <h6>{i18next.t("tnew28")}</h6>
            <p>
              {i18next.t("tdashboard11")}.{" "}
              <strong>
                {i18next.t("tdashboard12")}: &nbsp;
                <a href="/refer-and-earn">{i18next.t("tdashboard13")}</a>
              </strong>
            </p>
            <div className="ref-input-cont">
              <input
                readOnly={true}
                type="text"
                value={`https://payeerptyltd.org/register?username=${user?.user?.username}`}
                id="referrallink"
                className="refteam-referral"
              />
            </div>
            <button className="refteam-copy-button" onClick={handleCopy}>
              {i18next.t("tdashboard14")} <FaCopy />
            </button>
          </div>
          <Row
            className="refteam-main-1-3"
            gutter={{
              xs: 6,
              sm: 18,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="refteam-sub-1">
              <div className="refteam-sub-1-1">
                <h6>{i18next.t("tnew29")}</h6>
                <AiOutlineInfoCircle />
              </div>
              <div className="refteam-sub-1-2">
                <h5>
                  {refEarnings} <span>USD</span>
                </h5>
              </div>

              {userCurrency !== "USD" && (
                <div className="refteam-sub-1-3">
                  <h5>
                    {(refEarnings * curr).toFixed(2)}{" "}
                    <span>{userCurrency}</span>
                  </h5>
                </div>
              )}
              <div className="refteam-sub-1-4">
                <h6>{i18next.t("tnew22")}</h6>
                <div>
                  <p>0.00 USD</p>
                  <strong>
                    <span>
                      <HiOutlineArrowNarrowDown />
                    </span>
                    100%
                  </strong>
                </div>
              </div>
            </Col>
          </Row>
          <div className="refteam-list">
            <p>
              {i18next.t("tuser52")}({ref.length})
            </p>
          </div>
          <div>
            <h6 className="refs-list">{i18next.t("tuser53")}</h6>
            {refs?.map((item, index) => (
              <p className="refs-item" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="account-referral-3">
            <p className="refs-earning">
              {i18next.t("tuser54")} =
              <span className="referral-balance">
                ${(user?.user?.referralEarnings).toFixed(2)}
              </span>
            </p>
            <Button disabled={user?.user?.referralEarnings < 500}>
              {i18next.t("tuser56")}
            </Button>
            <p>
              <strong>{i18next.t("tuser57")}</strong>
            </p>
          </div>
        </div>
        <UserFooter />
      </div>
    </DocumentTitle>
  );
};

export default RefTeam;
