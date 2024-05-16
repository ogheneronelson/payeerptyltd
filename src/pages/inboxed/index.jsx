import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import i18next from "i18next";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";
import DocumentTitle from "react-document-title";

const ReceivedMail = () => {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({});

  const params = useParams();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getReceivedMessage = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/received-message/${params.messageID}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        setMsg(res.data);
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
    getReceivedMessage();
  }, [user?.token, params.messageID]);

  if (busy) {
    return <Spinner />;
  }

  return (
    <DocumentTitle title="Received Message | Payeer Pty Limited">
      <div className="receivedmail-main">
        <h4>{i18next.t("tinbox11")}</h4>
        <div className="receivedmail-main-1">
          <div>
            <p className="receivedmail-from">
              {i18next.t("tinbox12")} {msg?.from}
            </p>
            <p className="receivedmail-title">
              {i18next.t("tinbox13")} {msg?.subject}
            </p>
            <p className="receivedmail-date">
              {i18next.t("tinbox14")}{" "}
              {moment(msg.createdAt).format("YYYY/MM/DD")}
            </p>
          </div>
          <div className="receivedmail-main-1-2">
            <h5>{i18next.t("tinbox15")}</h5>
            <p>{msg?.message}</p>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default ReceivedMail;
