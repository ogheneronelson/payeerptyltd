import React, { useEffect, useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Row, Col } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

const SentMails = () => {
  const [message, setMessage] = useState([]);
  const [busy, setBusy] = useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getMessages = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/sent-messages/${user?.user?.id}`,

          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        setMessage(res.data);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }

          return console.log(error.response.data);
        }
        console.log(error);
      }
      setBusy(false);
    };
    getMessages();
  }, [user?.token, user?.user?.id]);

  if (busy) {
    return <Spinner />;
  }

  return (
    <DocumentTitle title="Sent Messages | Payeer Pty Limited">
      <div className="sentmails-main">
        <h4>{i18next.t("tsentmails21")}</h4>
        <Row
          className="sentmails-main-1"
          gutter={{
            xs: 6,
            sm: 18,
            md: 24,
            lg: 32,
          }}
        >
          {message?.map((msg, index) => (
            <Col key={index} className="sentmails-main-1-1">
              <div>
                <h6 className="sentmails-title">
                  {i18next.t("tsentmails22")} {msg?.title}
                </h6>
                <div>
                  <h6 className="sentmails-message-heading">
                    {i18next.t("tsentmails23")}
                  </h6>
                  <p className="sentmails-body">
                    {msg?.message.length > 40
                      ? msg?.message.slice(0, 50) + "..."
                      : msg?.message}
                  </p>
                </div>
                <p className="sentmails-date">
                  {i18next.t("tsentmails24")}{" "}
                  <span>{moment(msg?.createdAt).format("YYYY/MM/DD")}</span>
                </p>
              </div>
              <div>
                <Link
                  className="sentmails-link"
                  to={`/help/sent-emails/${msg?._id}`}
                >
                  {i18next.t("tsentmails25")}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </DocumentTitle>
  );
};

export default SentMails;
