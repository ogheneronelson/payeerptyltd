import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import AdminMessageNav from "../../../components/adminmessagenav";

const AdminIssues = () => {

  const { admin } = useSelector((state) => state.admin);

  const [busy, setBusy] = useState(true);
  const [user, setUser] = useState([]);


  const token = admin.token;
  const params = useParams();


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

  if (busy) {
    return <Spinner />;
  }

  return (
    <div>
      <AdminMessageNav user={user} />
      <Outlet />
    </div>
  );
};

export default AdminIssues;
