import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Spin from "../../../components/Spinner";
import TransferPagination from "../../../components/TransferPagination";
import TransferRecord from "../../../components/AdminTransfers";

const AdminTransfers = () => {
  const [busy, setBusy] = useState(true);
  const [transferData, setTransferData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/transfers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setTransferData(res.data);
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

  const currentRecords = transferData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const numberOfPages = Math.ceil(transferData.length / recordsPerPage);

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="admin-withdrawal">
      <h4 className="admin-withdrawal-request">Transfer Requests</h4>
      <TransferRecord transferData={currentRecords} />
      <TransferPagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminTransfers;
