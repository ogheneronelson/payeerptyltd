import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AdminUserNav from "../../../components/adminusernav";
import Spinner from "../../../components/Spinner";
import moment from "moment";
import { Modal } from "antd";

const User = () => {
  const [busy, setBusy] = useState(true);
  const [user, setUser] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { admin } = useSelector((state) => state.admin);
  const token = admin.token;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setUser(res.data);
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
    fetchData();
  }, [token, params.userId]);

  const handleOk = async () => {
    setIsModalVisible(false);
    setBusy(true);
    try {
      await axios.delete(
        process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBusy(false);
      toast.success("User successfully deleted");
      navigate("/admin/dashboard");
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
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    return null;
  };

  const handleDelete = () => setIsModalVisible(true);

  if (busy) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="admin-user">
        <div className="admin-user-1">
          <h2>
            Information for&nbsp;
            <span className="table-data-1">
              {user?.firstname}&nbsp;
              {user?.lastname}
            </span>
          </h2>
        </div>
        <div className="admin-user-2">
          <h6>
            Registration Number: <span>{user?._id}</span>
          </h6>
          <h6>
            Firstname: <span className="table-data-1">{user?.firstname}</span>
          </h6>{" "}
          <h6>
            Lastname: <span className="table-data-1">{user?.lastname}</span>
          </h6>{" "}
          <h6>
            Username: <span>{user?.username}</span>
          </h6>{" "}
          <h6>
            Email: <span>{user?.email}</span>
          </h6>{" "}
          <h6>
            Phone: <span>+{user?.phone}</span>
          </h6>{" "}
          <h6>
            Referred By: <span>{user?.referral}</span>
          </h6>
          <h6>
            Occupation: <span>{user?.occupation}</span>
          </h6>{" "}
          <h6>
            Country: <span>{user?.country}</span>
          </h6>
          <h6>
            Region: <span>{user?.region}</span>
          </h6>
          <h6>
            Referral Earning: <span>${user?.referralEarnings} </span>
          </h6>
          <h6>
            Registration Date:
            <span>{moment(user?.createdAt).format("YYYY-MM-DD HH:MM:SS")}</span>
          </h6>
          <h6>
            Verification Status: <span>{user?.verified}</span>
          </h6>
          <h6>
            Email verified?:{" "}
            {user?.active === false ? <span>No</span> : <span>Yes</span>}
          </h6>
          <h6>
            Verification Initiated?:{" "}
            {user?.verificationinitiated === false ? (
              <span>No</span>
            ) : (
              <span>Yes</span>
            )}
          </h6>
          <h6>
            Account Status: <span>{user?.status}</span>
          </h6>
        </div>
        <div className="admin-user-edit">
          <button>
            <a href={`/admin/edit-user/${user?._id}`}>Edit User</a>
          </button>
        </div>
        <div className="admin-user-3">
          <button onClick={handleDelete}>Delete User</button>
          <Modal
            title="Delete This User"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              Are you sure you want to delete this user? Once deleted, user data
              will be lost
            </p>
          </Modal>
        </div>
      </div>
      <div>
        <AdminUserNav user={user} />
        <Outlet />
      </div>
    </div>
  );
};

export default User;
