import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import Spin from "../../../components/Spinner";
import { useParams } from "react-router-dom";

const AdminSentMessages = () => {
  const [message, setMessage] = useState([]);
  const [busy, setBusy] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const params = useParams();
  const token = admin.token;

  useEffect(() => {
    const getMessages = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/admin/user-sent-messages/${params.userId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
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
  }, [token, params.userId]);

console.log(message);

  const handleDelete = async (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this message? Once deleted, data will be lost"
    );
    if (proceed) {
      setBusy(true);
      try {
        await axios.delete(
          process.env.REACT_APP_BASE_URI +
            `/admin/user-received-messages/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Message successfully deleted");
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
    return <Spin />;
  }

  return (
    <div className="admin-sent-messages-main">
      <h4>Sent Emails</h4>
      <Row
        className="admin-sent-messages-main-1"
        gutter={{
          xs: 6,
          sm: 18,
          md: 24,
          lg: 32,
        }}
      >
        {message?.map((msg, index) => (
          <Col key={index} className="admin-sent-messages-main-1-1">
            <div>
              <h6 className="admin-sent-messages-from">From: {msg?.from}</h6>
              <p className="admin-sent-messages-title">
                Subject: {msg?.subject}
              </p>
              <div className="amdin-sent-message-cont">
                <h6 className="admin-sent-messages-message-heading">Message</h6>
                <p className="admin-sent-messages-message">{msg?.message}</p>
              </div>
              <p className="admin-sent-messages-date">
                Date: {moment(msg?.createdAt).format("YYYY/MM/DD")}
              </p>
            </div>
            <div>
              <button
                className="admin-sent-messages-link"
                onClick={() => handleDelete(msg?._id)}
              >
                Delete Message
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminSentMessages;
