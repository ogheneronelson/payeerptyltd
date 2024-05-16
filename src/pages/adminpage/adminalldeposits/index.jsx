import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Spin from "../../../components/Spinner";
import DepositPagination from "../../../components/DepositPagination";
import DepositRecords from "../../../components/AdminDeposits";

const AdminDeposits = () => {
  const [busy, setBusy] = useState(true);
  const [depositData, setDepositData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/deposits`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setDepositData(res.data);
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
  }, [token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = depositData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const numberOfPages = Math.ceil(depositData.length / recordsPerPage);

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-deposits">
      <h4 className="admin-deposit-request">Deposit Requests</h4>
      <DepositRecords depositData={currentRecords} />
      <DepositPagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminDeposits;
