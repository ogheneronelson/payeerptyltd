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

const RecievedMails = () => {
  const [messages, setMessages] = useState([]);
  const [busy, setBusy] = useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getMessages = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/received-messages/${user?.user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        setMessages(res.data);
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
    <DocumentTitle title="Inbox | Payeer Pty Limited">
      <div className="receivedmails-main">
        <h4>{i18next.t("tmails16")}</h4>
        <Row
          className="receivedmails-main-1"
          gutter={{
            xs: 6,
            sm: 18,
            md: 24,
            lg: 32,
          }}
        >
          {messages?.map((msg, index) => (
            <Col key={index} className="receivedmails-main-1-1">
              <div>
                <h6 className="receivedmails-from">
                  {i18next.t("tmails17")} {msg?.from}
                </h6>
                <p className="receivedmails-title">
                  {i18next.t("tmails18")} {msg?.subject}
                </p>
                <div>
                  <h6 className="receivedmails-message-heading">
                    {i18next.t("tmails19")}
                  </h6>
                  <p className="receivedmails-message">
                    {msg?.message.length > 40
                      ? msg?.message.slice(0, 50) + "..."
                      : msg?.message}
                  </p>
                </div>
                <p className="receivedmails-date">
                  {i18next.t("tmails20")}{" "}
                  {moment(msg?.createdAt).format("YYYY/MM/DD")}
                </p>
              </div>
              <div>
                <Link
                  className="receivedmails-link"
                  to={`/help/inbox/${msg?._id}`}
                >
                  {i18next.t("tmails21")}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </DocumentTitle>
  );
};

export default RecievedMails;
