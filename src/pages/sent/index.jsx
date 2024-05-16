import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import i18next from "i18next";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";
import DocumentTitle from "react-document-title";

const SentMail = () => {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getSentMessage = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/sent-message/${params.messageID}`,
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
    getSentMessage();
  }, [user?.token, params.messageID]);

  const handleMessageDelete = async () => {
    const proceed = window.confirm([i18next.t("sent14")]);
    if (proceed) {
      setBusy(true);
      try {
        await axios.delete(
          process.env.REACT_APP_BASE_URI +
            `/auth/send-message/${params.messageID}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        toast.success([i18next.t("sent15")]);
        navigate("/help/sent-emails");
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }
          setBusy(false);
          return console.log(error.response.data);
        }
        setBusy(false);
        console.log(error);
      }
    } else {
      return null;
    }
  };

  if (busy) {
    return <Spinner />;
  }

  console.log(msg);

  return (
    <DocumentTitle title="Sent Message | Payeer Pty Limited">
      <div className="sentmail-main">
        <h4>{i18next.t("tsent16")}</h4>
        <div className="sentmail-main-1">
          <div>
            <p className="sentmail-title">
              {i18next.t("tsent17")} {msg.title}
            </p>
            <p className="sentmail-date">
              {i18next.t("tsent18")}{" "}
              {moment(msg.createdAt).format("YYYY/MM/DD")}
            </p>
          </div>
          <div className="sentmail-main-1-2">
            <h5>{i18next.t("tsent19")}</h5>
            <p>{msg.message}</p>
          </div>
          <button onClick={handleMessageDelete} className="sentmail-button">
            {i18next.t("tsent20")}
          </button>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default SentMail;
