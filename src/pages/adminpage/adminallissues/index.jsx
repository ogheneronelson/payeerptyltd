import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Col } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import Spin from "../../../components/Spinner";

const AdminIssues = () => {
  const [message, setMessage] = useState([]);
  const [busy, setBusy] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;

  useEffect(() => {
    const getMessages = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/user-messages`,

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
  }, [token]);
  console.log(message);
  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-user-messages-main">
      <h4>Received Messages</h4>
      <Row
        className="admin-user-messages-main-1"
        gutter={{
          xs: 6,
          sm: 18,
          md: 24,
          lg: 32,
        }}
      >
        {message?.map((msg, index) => (
          <Col key={index} className="admin-user-messages-main-1-1">
            <div>
              <h6 className="admin-user-messages-title">Issue Type: {msg?.title}</h6>
              <h6 className="admin-user-messages-title">Sender: {msg?.email}</h6>
              <div>
                <h6 className="admin-user-messages-message-heading">Message</h6>
                <p className="admin-user-messages-body">{msg?.message}</p>
              </div>
              <p className="admin-user-messages-date">
                Sent on the{" "}
                <span>{moment(msg?.createdAt).format("YYYY/MM/DD")}</span>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminIssues;
