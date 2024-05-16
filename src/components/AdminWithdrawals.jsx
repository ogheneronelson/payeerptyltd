import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";

const AdminWithdrawals = ({ withdrawalData }) => {
  console.log(withdrawalData)
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th className="invest-head">S/N</th>
          <th className="invest-head">Email</th>
          <th className="invest-head">Type</th>
          <th className="invest-head">Coin</th>
          <th className="invest-head">Amount</th>
          <th className="invest-head">Wallet</th>
          <th className="invest-head">Status</th>
          <th className="invest-head">Reference</th>
          <th className="invest-head">Date</th>
        </tr>
      </thead>
      <tbody>
        {withdrawalData?.map((withdrawal, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{withdrawal?.email}</td>
            <td>{withdrawal?.type}</td>
            <td style={{ textTransform: "capitalize" }}>{withdrawal?.coin}</td>
            <td> ${withdrawal?.amount}</td>
            <td>{withdrawal?.walletAddress}</td>
            <td>{withdrawal?.status}</td>
            <td style={{ textTransform: "uppercase" }}>
              {withdrawal?.reference}
            </td>
            <td>
              {moment(withdrawal?.createdAt).format("YYYY/MM/DD HH:MM:SS")}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminWithdrawals;
