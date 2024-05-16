import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Spin from "../../../components/Spinner";
import WithdrawalPagination from "../../../components/WithdrawalPagination";
import WithdrawalRecord from "../../../components/AdminWithdrawals";

const AdminWithdrawals = () => {
  const [busy, setBusy] = useState(true);
  const [withdrawalData, setWithdrawalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/all-withdrawals`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setWithdrawalData(res.data);
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

  const currentRecords = withdrawalData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const numberOfPages = Math.ceil(withdrawalData.length / recordsPerPage);

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-withdrawal">
      <h4 className="admin-withdrawal-request">Withdrawal Requests</h4>
      <WithdrawalRecord withdrawalData={currentRecords} />
      <WithdrawalPagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminWithdrawals;
