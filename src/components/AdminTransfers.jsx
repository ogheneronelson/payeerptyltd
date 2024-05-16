import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

const AdminTransfers = ({ transferData }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className="invest-head">S/N</th>
          <th className="invest-head">Email</th>
          <th className="invest-head">Coin</th>
          <th className="invest-head">Amount</th>
          <th className="invest-head">Wallet</th>
          <th className="invest-head">Status</th>
          <th className="invest-head">Reference</th>
          <th className="invest-head">Date</th>
        </tr>
      </thead>
      <tbody>
        {transferData?.map((transfer, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{transfer?.email}</td>
            <td style={{textTransform: "capitalize"}}>{transfer?.coin}</td>
            <td> ${transfer?.amount}</td>
            <td>{transfer?.walletAddress}</td>
            <td>{transfer?.status}</td>
            <td style={{textTransform: "uppercase"}}>{transfer?.reference}</td>
            <td>{moment(transfer?.createdAt).format("YYYY/MM/DD HH:MM:SS")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTransfers;
